SET TOOLS_PATH=..\..\.nuget\packages\grpc.tools\1.17.1\tools\windows_x64\
SET PROTO_PATH=Protos
SET JS_TOOL_PATH=ProtobufDemoClient\node_modules\.bin
SET CS_DEST_PATH=ProtobufDemoWeb\Models
SET JS_DEST_PATH=ProtobufDemoClient\src\app\models

%TOOLS_PATH%\protoc.exe %PROTO_PATH%\Employee.proto --csharp_out %CS_DEST_PATH%


%JS_TOOL_PATH%\pbjs -t static-module -w commonjs -o %JS_DEST_PATH%\Employee.js %PROTO_PATH%\Employee.proto & %JS_TOOL_PATH%\pbts -o %JS_DEST_PATH%\Employee.d.ts %JS_DEST_PATH%\Employee.js

endlocal