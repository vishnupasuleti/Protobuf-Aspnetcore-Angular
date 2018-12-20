using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Net.Http.Headers;

public class ProtobufOutputFormatter : OutputFormatter
    {
        static MediaTypeHeaderValue protoMediaType = MediaTypeHeaderValue.Parse(AppConstants.PROTO_MEDIA_TYPE);

        public override bool CanWriteResult(OutputFormatterCanWriteContext context)
        {
            MediaTypeHeaderValue requestContentType = null;
            MediaTypeHeaderValue.TryParse(context.ContentType, out requestContentType);
            if (context.Object == null || requestContentType == null)
            {
                return false;
            }

            return context.ObjectType.GetTypeInfo()
                .ImplementedInterfaces
                .Where(i => i.GetTypeInfo().IsGenericType)
                .Any(i => i.GetGenericTypeDefinition() == typeof(IMessage<>));
        }

        public override Task WriteResponseBodyAsync(OutputFormatterWriteContext context)
        {
            var response = context.HttpContext.Response;
            var protoObj = context.Object as IMessage;
            var serialized = protoObj.ToByteArray();
            return response.Body.WriteAsync(serialized, 0, serialized.Length);
        }
    }