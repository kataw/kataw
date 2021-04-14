# Kataw parser test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
var v = { * foo() {@{xd}@
    yield(foo);@{xd}@
  }@{xd}@
}@{xd}@
`````@{xd}@
@{xd}@
## Output@{xd}@
@{xd}@
@{xd}@
### Hybrid CST@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
{@{xd}@
    "kind": 196,@{xd}@
    "source": "var v = { * foo() {\n    yield(foo);\n  }\n}",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 2097397,@{xd}@
                "declarationList": {@{xd}@
                    "kind": 244,@{xd}@
                    "declarations": [@{xd}@
                        {@{xd}@
                            "kind": 243,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "v",@{xd}@
                                "rawText": "v",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 3,@{xd}@
                                "end": 5@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": null,@{xd}@
                            "initializer": {@{xd}@
                                "kind": 67224232,@{xd}@
                                "propertyList": {@{xd}@
                                    "kind": 65722,@{xd}@
                                    "properties": [@{xd}@
                                        {@{xd}@
                                            "kind": 17303650,@{xd}@
                                            "name": {@{xd}@
                                                "kind": 196711,@{xd}@
                                                "text": "foo",@{xd}@
                                                "rawText": "foo",@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 11,@{xd}@
                                                "end": 15@{xd}@
                                            },@{xd}@
                                            "formalParameters": {@{xd}@
                                                "kind": 90,@{xd}@
                                                "formalParameterList": [],@{xd}@
                                                "trailingComma": false,@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 16,@{xd}@
                                                "end": 17@{xd}@
                                            },@{xd}@
                                            "isSetter": false,@{xd}@
                                            "isGetter": false,@{xd}@
                                            "contents": {@{xd}@
                                                "kind": 91,@{xd}@
                                                "functionStatementList": {@{xd}@
                                                    "kind": 94,@{xd}@
                                                    "statements": [@{xd}@
                                                        {@{xd}@
                                                            "kind": 2097233,@{xd}@
                                                            "expression": {@{xd}@
                                                                "kind": 65785,@{xd}@
                                                                "delegate": false,@{xd}@
                                                                "expression": {@{xd}@
                                                                    "kind": 66224,@{xd}@
                                                                    "expression": {@{xd}@
                                                                        "kind": 196712,@{xd}@
                                                                        "text": "foo",@{xd}@
                                                                        "rawText": "foo",@{xd}@
                                                                        "flags": 0,@{xd}@
                                                                        "intersects": false,@{xd}@
                                                                        "transformFlags": 0,@{xd}@
                                                                        "start": 30,@{xd}@
                                                                        "end": 33@{xd}@
                                                                    },@{xd}@
                                                                    "flags": 0,@{xd}@
                                                                    "intersects": false,@{xd}@
                                                                    "transformFlags": 0,@{xd}@
                                                                    "start": 29,@{xd}@
                                                                    "end": 34@{xd}@
                                                                },@{xd}@
                                                                "flags": 0,@{xd}@
                                                                "intersects": false,@{xd}@
                                                                "transformFlags": 16393,@{xd}@
                                                                "start": 19,@{xd}@
                                                                "end": 34@{xd}@
                                                            },@{xd}@
                                                            "flags": 0,@{xd}@
                                                            "intersects": false,@{xd}@
                                                            "transformFlags": 0,@{xd}@
                                                            "start": 19,@{xd}@
                                                            "end": 35@{xd}@
                                                        }@{xd}@
                                                    ],@{xd}@
                                                    "multiline": true,@{xd}@
                                                    "flags": 16384,@{xd}@
                                                    "intersects": false,@{xd}@
                                                    "transformFlags": 0,@{xd}@
                                                    "start": 19,@{xd}@
                                                    "end": 35@{xd}@
                                                },@{xd}@
                                                "flags": 16384,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 17,@{xd}@
                                                "end": 39@{xd}@
                                            },@{xd}@
                                            "decorators": null,@{xd}@
                                            "type": null,@{xd}@
                                            "accessModifier": null,@{xd}@
                                            "typeParameters": null,@{xd}@
                                            "flags": 0,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 2097152,@{xd}@
                                            "start": 15,@{xd}@
                                            "end": 39@{xd}@
                                        }@{xd}@
                                    ],@{xd}@
                                    "trailingComma": false,@{xd}@
                                    "multiline": false,@{xd}@
                                    "flags": 16384,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 9,@{xd}@
                                    "end": 39@{xd}@
                                },@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 7,@{xd}@
                                "end": 41@{xd}@
                            },@{xd}@
                            "flags": 3,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 0,@{xd}@
                            "end": 41@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 3,@{xd}@
                    "end": 41@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 0,@{xd}@
                "end": 41@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 41@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 41@{xd}@
}@{xd}@
```@{xd}@
@{xd}@
### Printed@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{x2716}@ Soon to be open sourced@{xd}@
```@{xd}@
@{xd}@
### Diagnostics@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{xd}@
```@{xd}@
@{xd}@

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "parser",
                "rawText": "parser",
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 6,
                "end": 11
            },
            "flags": 128,
            "start": 6,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 226,
                            "member": {
                                "kind": 226,
                                "member": {
                                    "kind": 134299649,
                                    "text": "Input",
                                    "rawText": "Input",
                                    "flags": 768,
                                    "start": 22,
                                    "end": 28
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 28,
                                    "end": 34
                                },
                                "flags": 256,
                                "start": 22,
                                "end": 34
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 256,
                            "start": 22,
                            "end": 36
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rvar v = { * foo() {\r    yield(foo);\r  }\r}\r",
                            "rawText": "js\r\nvar v = { * foo() {\r\n    yield(foo);\r\n  }\r\n}\r\n",
                            "flags": 768,
                            "start": 36,
                            "end": 88
                        },
                        "flags": 256,
                        "start": 22,
                        "end": 88
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 88,
                        "end": 90
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 90
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 90,
                    "end": 92
                },
                "flags": 256,
                "start": 22,
                "end": 92
            },
            "flags": 128,
            "start": 22,
            "end": 92
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 98,
                "end": 105
            },
            "flags": 128,
            "start": 98,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 114,
                "end": 121
            },
            "flags": 128,
            "start": 114,
            "end": 121
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "CST",
                            "rawText": "CST",
                            "flags": 768,
                            "start": 121,
                            "end": 125
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 125,
                            "end": 133
                        },
                        "flags": 256,
                        "start": 121,
                        "end": 133
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"var v = { * foo() {\n    yield(foo);\n  }\n}\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 2097397,\r                \"declarationList\": {\r                    \"kind\": 244,\r                    \"declarations\": [\r                        {\r                            \"kind\": 243,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"v\",\r                                \"rawText\": \"v\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": {\r                                \"kind\": 67224232,\r                                \"propertyList\": {\r                                    \"kind\": 65722,\r                                    \"properties\": [\r                                        {\r                                            \"kind\": 17303650,\r                                            \"name\": {\r                                                \"kind\": 196711,\r                                                \"text\": \"foo\",\r                                                \"rawText\": \"foo\",\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 11,\r                                                \"end\": 15\r                                            },\r                                            \"formalParameters\": {\r                                                \"kind\": 90,\r                                                \"formalParameterList\": [],\r                                                \"trailingComma\": false,\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 16,\r                                                \"end\": 17\r                                            },\r                                            \"isSetter\": false,\r                                            \"isGetter\": false,\r                                            \"contents\": {\r                                                \"kind\": 91,\r                                                \"functionStatementList\": {\r                                                    \"kind\": 94,\r                                                    \"statements\": [\r                                                        {\r                                                            \"kind\": 2097233,\r                                                            \"expression\": {\r                                                                \"kind\": 65785,\r                                                                \"delegate\": false,\r                                                                \"expression\": {\r                                                                    \"kind\": 66224,\r                                                                    \"expression\": {\r                                                                        \"kind\": 196712,\r                                                                        \"text\": \"foo\",\r                                                                        \"rawText\": \"foo\",\r                                                                        \"flags\": 0,\r                                                                        \"intersects\": false,\r                                                                        \"transformFlags\": 0,\r                                                                        \"start\": 30,\r                                                                        \"end\": 33\r                                                                    },\r                                                                    \"flags\": 0,\r                                                                    \"intersects\": false,\r                                                                    \"transformFlags\": 0,\r                                                                    \"start\": 29,\r                                                                    \"end\": 34\r                                                                },\r                                                                \"flags\": 0,\r                                                                \"intersects\": false,\r                                                                \"transformFlags\": 16393,\r                                                                \"start\": 19,\r                                                                \"end\": 34\r                                                            },\r                                                            \"flags\": 0,\r                                                            \"intersects\": false,\r                                                            \"transformFlags\": 0,\r                                                            \"start\": 19,\r                                                            \"end\": 35\r                                                        }\r                                                    ],\r                                                    \"multiline\": true,\r                                                    \"flags\": 16384,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 19,\r                                                    \"end\": 35\r                                                },\r                                                \"flags\": 16384,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 17,\r                                                \"end\": 39\r                                            },\r                                            \"decorators\": null,\r                                            \"type\": null,\r                                            \"accessModifier\": null,\r                                            \"typeParameters\": null,\r                                            \"flags\": 0,\r                                            \"intersects\": false,\r                                            \"transformFlags\": 2097152,\r                                            \"start\": 15,\r                                            \"end\": 39\r                                        }\r                                    ],\r                                    \"trailingComma\": false,\r                                    \"multiline\": false,\r                                    \"flags\": 16384,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 9,\r                                    \"end\": 39\r                                },\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 7,\r                                \"end\": 41\r                            },\r                            \"flags\": 3,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 0,\r                            \"end\": 41\r                        }\r                    ],\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 41\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 0,\r                \"end\": 41\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 41\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 41\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67224232,\r\n                                \"propertyList\": {\r\n                                    \"kind\": 65722,\r\n                                    \"properties\": [\r\n                                        {\r\n                                            \"kind\": 17303650,\r\n                                            \"name\": {\r\n                                                \"kind\": 196711,\r\n                                                \"text\": \"foo\",\r\n                                                \"rawText\": \"foo\",\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 11,\r\n                                                \"end\": 15\r\n                                            },\r\n                                            \"formalParameters\": {\r\n                                                \"kind\": 90,\r\n                                                \"formalParameterList\": [],\r\n                                                \"trailingComma\": false,\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 16,\r\n                                                \"end\": 17\r\n                                            },\r\n                                            \"isSetter\": false,\r\n                                            \"isGetter\": false,\r\n                                            \"contents\": {\r\n                                                \"kind\": 91,\r\n                                                \"functionStatementList\": {\r\n                                                    \"kind\": 94,\r\n                                                    \"statements\": [\r\n                                                        {\r\n                                                            \"kind\": 2097233,\r\n                                                            \"expression\": {\r\n                                                                \"kind\": 65785,\r\n                                                                \"delegate\": false,\r\n                                                                \"expression\": {\r\n                                                                    \"kind\": 66224,\r\n                                                                    \"expression\": {\r\n                                                                        \"kind\": 196712,\r\n                                                                        \"text\": \"foo\",\r\n                                                                        \"rawText\": \"foo\",\r\n                                                                        \"flags\": 0,\r\n                                                                        \"intersects\": false,\r\n                                                                        \"transformFlags\": 0,\r\n                                                                        \"start\": 30,\r\n                                                                        \"end\": 33\r\n                                                                    },\r\n                                                                    \"flags\": 0,\r\n                                                                    \"intersects\": false,\r\n                                                                    \"transformFlags\": 0,\r\n                                                                    \"start\": 29,\r\n                                                                    \"end\": 34\r\n                                                                },\r\n                                                                \"flags\": 0,\r\n                                                                \"intersects\": false,\r\n                                                                \"transformFlags\": 16393,\r\n                                                                \"start\": 19,\r\n                                                                \"end\": 34\r\n                                                            },\r\n                                                            \"flags\": 0,\r\n                                                            \"intersects\": false,\r\n                                                            \"transformFlags\": 0,\r\n                                                            \"start\": 19,\r\n                                                            \"end\": 35\r\n                                                        }\r\n                                                    ],\r\n                                                    \"multiline\": true,\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 19,\r\n                                                    \"end\": 35\r\n                                                },\r\n                                                \"flags\": 16384,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 17,\r\n                                                \"end\": 39\r\n                                            },\r\n                                            \"decorators\": null,\r\n                                            \"type\": null,\r\n                                            \"accessModifier\": null,\r\n                                            \"typeParameters\": null,\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 2097152,\r\n                                            \"start\": 15,\r\n                                            \"end\": 39\r\n                                        }\r\n                                    ],\r\n                                    \"trailingComma\": false,\r\n                                    \"multiline\": false,\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 9,\r\n                                    \"end\": 39\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 41\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 41\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 41\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 41\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 41\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 41\r\n}\r\n",
                        "flags": 768,
                        "start": 133,
                        "end": 9233
                    },
                    "flags": 256,
                    "start": 121,
                    "end": 9233
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 9233,
                    "end": 9235
                },
                "flags": 256,
                "start": 121,
                "end": 9235
            },
            "flags": 128,
            "start": 121,
            "end": 9235
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "Printed",
                            "rawText": "Printed",
                            "flags": 768,
                            "start": 9242,
                            "end": 9250
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 9250,
                            "end": 9258
                        },
                        "flags": 256,
                        "start": 9242,
                        "end": 9258
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 9258,
                        "end": 9299
                    },
                    "flags": 256,
                    "start": 9242,
                    "end": 9299
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 9299,
                    "end": 9301
                },
                "flags": 256,
                "start": 9242,
                "end": 9301
            },
            "flags": 128,
            "start": 9242,
            "end": 9301
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "Diagnostics",
                            "rawText": "Diagnostics",
                            "flags": 768,
                            "start": 9308,
                            "end": 9320
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 9320,
                            "end": 9328
                        },
                        "flags": 256,
                        "start": 9308,
                        "end": 9328
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r\r",
                        "rawText": "javascript\r\n\r\n",
                        "flags": 768,
                        "start": 9328,
                        "end": 9344
                    },
                    "flags": 256,
                    "start": 9308,
                    "end": 9344
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 9344,
                    "end": 9346
                },
                "flags": 256,
                "start": 9308,
                "end": 9346
            },
            "flags": 128,
            "start": 9308,
            "end": 9346
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 9353,
                "end": 9360
            },
            "flags": 128,
            "start": 9353,
            "end": 9360
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 9365,
                "end": 9372
            },
            "flags": 128,
            "start": 9365,
            "end": 9372
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 226,
                            "member": {
                                "kind": 134299649,
                                "text": "CST",
                                "rawText": "CST",
                                "flags": 768,
                                "start": 9372,
                                "end": 9376
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 9376,
                                "end": 9380
                            },
                            "flags": 256,
                            "start": 9372,
                            "end": 9380
                        },
                        "template": {
                            "kind": 458761,
                            "text": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\rvar v = { * foo() {\r    yield(foo);\r  }\r}\r\",\n                            \"rawText\": \"js\r\nvar v = { * foo() {\r\n    yield(foo);\r\n  }\r\n}\r\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 88\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 88\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 88,\n                        \"end\": 90\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 90\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 90,\n                    \"end\": 92\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 92\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 92\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 98,\n                \"end\": 105\n            },\n            \"flags\": 128,\n            \"start\": 98,\n            \"end\": 105\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 114,\n                \"end\": 121\n            },\n            \"flags\": 128,\n            \"start\": 114,\n            \"end\": 121\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 121,\n                            \"end\": 125\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 125,\n                            \"end\": 133\n                        },\n                        \"flags\": 256,\n                        \"start\": 121,\n                        \"end\": 133\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r{\r    \"kind\": 196,\r    \"source\": \"var v = { * foo() {\n    yield(foo);\n  }\n}\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 2097397,\r                \"declarationList\": {\r                    \"kind\": 244,\r                    \"declarations\": [\r                        {\r                            \"kind\": 243,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"v\",\r                                \"rawText\": \"v\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": {\r                                \"kind\": 67224232,\r                                \"propertyList\": {\r                                    \"kind\": 65722,\r                                    \"properties\": [\r                                        {\r                                            \"kind\": 17303650,\r                                            \"name\": {\r                                                \"kind\": 196711,\r                                                \"text\": \"foo\",\r                                                \"rawText\": \"foo\",\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 11,\r                                                \"end\": 15\r                                            },\r                                            \"formalParameters\": {\r                                                \"kind\": 90,\r                                                \"formalParameterList\": [],\r                                                \"trailingComma\": false,\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 16,\r                                                \"end\": 17\r                                            },\r                                            \"isSetter\": false,\r                                            \"isGetter\": false,\r                                            \"contents\": {\r                                                \"kind\": 91,\r                                                \"functionStatementList\": {\r                                                    \"kind\": 94,\r                                                    \"statements\": [\r                                                        {\r                                                            \"kind\": 2097233,\r                                                            \"expression\": {\r                                                                \"kind\": 65785,\r                                                                \"delegate\": false,\r                                                                \"expression\": {\r                                                                    \"kind\": 66224,\r                                                                    \"expression\": {\r                                                                        \"kind\": 196712,\r                                                                        \"text\": \"foo\",\r                                                                        \"rawText\": \"foo\",\r                                                                        \"flags\": 0,\r                                                                        \"intersects\": false,\r                                                                        \"transformFlags\": 0,\r                                                                        \"start\": 30,\r                                                                        \"end\": 33\r                                                                    },\r                                                                    \"flags\": 0,\r                                                                    \"intersects\": false,\r                                                                    \"transformFlags\": 0,\r                                                                    \"start\": 29,\r                                                                    \"end\": 34\r                                                                },\r                                                                \"flags\": 0,\r                                                                \"intersects\": false,\r                                                                \"transformFlags\": 16393,\r                                                                \"start\": 19,\r                                                                \"end\": 34\r                                                            },\r                                                            \"flags\": 0,\r                                                            \"intersects\": false,\r                                                            \"transformFlags\": 0,\r                                                            \"start\": 19,\r                                                            \"end\": 35\r                                                        }\r                                                    ],\r                                                    \"multiline\": true,\r                                                    \"flags\": 16384,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 19,\r                                                    \"end\": 35\r                                                },\r                                                \"flags\": 16384,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 17,\r                                                \"end\": 39\r                                            },\r                                            \"decorators\": null,\r                                            \"type\": null,\r                                            \"accessModifier\": null,\r                                            \"typeParameters\": null,\r                                            \"flags\": 0,\r                                            \"intersects\": false,\r                                            \"transformFlags\": 2097152,\r                                            \"start\": 15,\r                                            \"end\": 39\r                                        }\r                                    ],\r                                    \"trailingComma\": false,\r                                    \"multiline\": false,\r                                    \"flags\": 16384,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 9,\r                                    \"end\": 39\r                                },\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 7,\r                                \"end\": 41\r                            },\r                            \"flags\": 3,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 0,\r                            \"end\": 41\r                        }\r                    ],\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 41\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 0,\r                \"end\": 41\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 41\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 41\r}\r\",\n                        \"rawText\": \"javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67224232,\r\n                                \"propertyList\": {\r\n                                    \"kind\": 65722,\r\n                                    \"properties\": [\r\n                                        {\r\n                                            \"kind\": 17303650,\r\n                                            \"name\": {\r\n                                                \"kind\": 196711,\r\n                                                \"text\": \"foo\",\r\n                                                \"rawText\": \"foo\",\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 11,\r\n                                                \"end\": 15\r\n                                            },\r\n                                            \"formalParameters\": {\r\n                                                \"kind\": 90,\r\n                                                \"formalParameterList\": [],\r\n                                                \"trailingComma\": false,\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 16,\r\n                                                \"end\": 17\r\n                                            },\r\n                                            \"isSetter\": false,\r\n                                            \"isGetter\": false,\r\n                                            \"contents\": {\r\n                                                \"kind\": 91,\r\n                                                \"functionStatementList\": {\r\n                                                    \"kind\": 94,\r\n                                                    \"statements\": [\r\n                                                        {\r\n                                                            \"kind\": 2097233,\r\n                                                            \"expression\": {\r\n                                                                \"kind\": 65785,\r\n                                                                \"delegate\": false,\r\n                                                                \"expression\": {\r\n                                                                    \"kind\": 66224,\r\n                                                                    \"expression\": {\r\n                                                                        \"kind\": 196712,\r\n                                                                        \"text\": \"foo\",\r\n                                                                        \"rawText\": \"foo\",\r\n                                                                        \"flags\": 0,\r\n                                                                        \"intersects\": false,\r\n                                                                        \"transformFlags\": 0,\r\n                                                                        \"start\": 30,\r\n                                                                        \"end\": 33\r\n                                                                    },\r\n                                                                    \"flags\": 0,\r\n                                                                    \"intersects\": false,\r\n                                                                    \"transformFlags\": 0,\r\n                                                                    \"start\": 29,\r\n                                                                    \"end\": 34\r\n                                                                },\r\n                                                                \"flags\": 0,\r\n                                                                \"intersects\": false,\r\n                                                                \"transformFlags\": 16393,\r\n                                                                \"start\": 19,\r\n                                                                \"end\": 34\r\n                                                            },\r\n                                                            \"flags\": 0,\r\n                                                            \"intersects\": false,\r\n                                                            \"transformFlags\": 0,\r\n                                                            \"start\": 19,\r\n                                                            \"end\": 35\r\n                                                        }\r\n                                                    ],\r\n                                                    \"multiline\": true,\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 19,\r\n                                                    \"end\": 35\r\n                                                },\r\n                                                \"flags\": 16384,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 17,\r\n                                                \"end\": 39\r\n                                            },\r\n                                            \"decorators\": null,\r\n                                            \"type\": null,\r\n                                            \"accessModifier\": null,\r\n                                            \"typeParameters\": null,\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 2097152,\r\n                                            \"start\": 15,\r\n                                            \"end\": 39\r\n                                        }\r\n                                    ],\r\n                                    \"trailingComma\": false,\r\n                                    \"multiline\": false,\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 9,\r\n                                    \"end\": 39\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 41\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 41\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 41\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 41\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 41\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 41\r\n}\r\n\",\n                        \"flags\": 768,\n                        \"start\": 133,\n                        \"end\": 9233\n                    },\n                    \"flags\": 256,\n                    \"start\": 121,\n                    \"end\": 9233\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 9233,\n                    \"end\": 9235\n                },\n                \"flags\": 256,\n                \"start\": 121,\n                \"end\": 9235\n            },\n            \"flags\": 128,\n            \"start\": 121,\n            \"end\": 9235\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 9242,\n                            \"end\": 9250\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 9250,\n                            \"end\": 9258\n                        },\n                        \"flags\": 256,\n                        \"start\": 9242,\n                        \"end\": 9258\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r@{x2716}@ Soon to be open sourced\r\",\n                        \"rawText\": \"javascript\r\n@{x2716}@ Soon to be open sourced\r\n\",\n                        \"flags\": 768,\n                        \"start\": 9258,\n                        \"end\": 9299\n                    },\n                    \"flags\": 256,\n                    \"start\": 9242,\n                    \"end\": 9299\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 9299,\n                    \"end\": 9301\n                },\n                \"flags\": 256,\n                \"start\": 9242,\n                \"end\": 9301\n            },\n            \"flags\": 128,\n            \"start\": 9242,\n            \"end\": 9301\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 9308,\n                            \"end\": 9320\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 9320,\n                            \"end\": 9328\n                        },\n                        \"flags\": 256,\n                        \"start\": 9308,\n                        \"end\": 9328\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r\r\",\n                        \"rawText\": \"javascript\r\n\r\n\",\n                        \"flags\": 768,\n                        \"start\": 9328,\n                        \"end\": 9344\n                    },\n                    \"flags\": 256,\n                    \"start\": 9308,\n                    \"end\": 9344\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 9344,\n                    \"end\": 9346\n                },\n                \"flags\": 256,\n                \"start\": 9308,\n                \"end\": 9346\n            },\n            \"flags\": 128,\n            \"start\": 9308,\n            \"end\": 9346\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\r\n\r\n## Input\r\n\r\n",
                            "rawText": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\rvar v = { * foo() {\\r    yield(foo);\\r  }\\r}\\r\",\n                            \"rawText\": \"js\\r\\nvar v = { * foo() {\\r\\n    yield(foo);\\r\\n  }\\r\\n}\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 88\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 88\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 88,\n                        \"end\": 90\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 90\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 90,\n                    \"end\": 92\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 92\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 92\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 98,\n                \"end\": 105\n            },\n            \"flags\": 128,\n            \"start\": 98,\n            \"end\": 105\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 114,\n                \"end\": 121\n            },\n            \"flags\": 128,\n            \"start\": 114,\n            \"end\": 121\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 121,\n                            \"end\": 125\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 125,\n                            \"end\": 133\n                        },\n                        \"flags\": 256,\n                        \"start\": 121,\n                        \"end\": 133\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 2097397,\\r                \\\"declarationList\\\": {\\r                    \\\"kind\\\": 244,\\r                    \\\"declarations\\\": [\\r                        {\\r                            \\\"kind\\\": 243,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"v\\\",\\r                                \\\"rawText\\\": \\\"v\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 3,\\r                                \\\"end\\\": 5\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": null,\\r                            \\\"initializer\\\": {\\r                                \\\"kind\\\": 67224232,\\r                                \\\"propertyList\\\": {\\r                                    \\\"kind\\\": 65722,\\r                                    \\\"properties\\\": [\\r                                        {\\r                                            \\\"kind\\\": 17303650,\\r                                            \\\"name\\\": {\\r                                                \\\"kind\\\": 196711,\\r                                                \\\"text\\\": \\\"foo\\\",\\r                                                \\\"rawText\\\": \\\"foo\\\",\\r                                                \\\"flags\\\": 0,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 11,\\r                                                \\\"end\\\": 15\\r                                            },\\r                                            \\\"formalParameters\\\": {\\r                                                \\\"kind\\\": 90,\\r                                                \\\"formalParameterList\\\": [],\\r                                                \\\"trailingComma\\\": false,\\r                                                \\\"flags\\\": 0,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 16,\\r                                                \\\"end\\\": 17\\r                                            },\\r                                            \\\"isSetter\\\": false,\\r                                            \\\"isGetter\\\": false,\\r                                            \\\"contents\\\": {\\r                                                \\\"kind\\\": 91,\\r                                                \\\"functionStatementList\\\": {\\r                                                    \\\"kind\\\": 94,\\r                                                    \\\"statements\\\": [\\r                                                        {\\r                                                            \\\"kind\\\": 2097233,\\r                                                            \\\"expression\\\": {\\r                                                                \\\"kind\\\": 65785,\\r                                                                \\\"delegate\\\": false,\\r                                                                \\\"expression\\\": {\\r                                                                    \\\"kind\\\": 66224,\\r                                                                    \\\"expression\\\": {\\r                                                                        \\\"kind\\\": 196712,\\r                                                                        \\\"text\\\": \\\"foo\\\",\\r                                                                        \\\"rawText\\\": \\\"foo\\\",\\r                                                                        \\\"flags\\\": 0,\\r                                                                        \\\"intersects\\\": false,\\r                                                                        \\\"transformFlags\\\": 0,\\r                                                                        \\\"start\\\": 30,\\r                                                                        \\\"end\\\": 33\\r                                                                    },\\r                                                                    \\\"flags\\\": 0,\\r                                                                    \\\"intersects\\\": false,\\r                                                                    \\\"transformFlags\\\": 0,\\r                                                                    \\\"start\\\": 29,\\r                                                                    \\\"end\\\": 34\\r                                                                },\\r                                                                \\\"flags\\\": 0,\\r                                                                \\\"intersects\\\": false,\\r                                                                \\\"transformFlags\\\": 16393,\\r                                                                \\\"start\\\": 19,\\r                                                                \\\"end\\\": 34\\r                                                            },\\r                                                            \\\"flags\\\": 0,\\r                                                            \\\"intersects\\\": false,\\r                                                            \\\"transformFlags\\\": 0,\\r                                                            \\\"start\\\": 19,\\r                                                            \\\"end\\\": 35\\r                                                        }\\r                                                    ],\\r                                                    \\\"multiline\\\": true,\\r                                                    \\\"flags\\\": 16384,\\r                                                    \\\"intersects\\\": false,\\r                                                    \\\"transformFlags\\\": 0,\\r                                                    \\\"start\\\": 19,\\r                                                    \\\"end\\\": 35\\r                                                },\\r                                                \\\"flags\\\": 16384,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 17,\\r                                                \\\"end\\\": 39\\r                                            },\\r                                            \\\"decorators\\\": null,\\r                                            \\\"type\\\": null,\\r                                            \\\"accessModifier\\\": null,\\r                                            \\\"typeParameters\\\": null,\\r                                            \\\"flags\\\": 0,\\r                                            \\\"intersects\\\": false,\\r                                            \\\"transformFlags\\\": 2097152,\\r                                            \\\"start\\\": 15,\\r                                            \\\"end\\\": 39\\r                                        }\\r                                    ],\\r                                    \\\"trailingComma\\\": false,\\r                                    \\\"multiline\\\": false,\\r                                    \\\"flags\\\": 16384,\\r                                    \\\"intersects\\\": false,\\r                                    \\\"transformFlags\\\": 0,\\r                                    \\\"start\\\": 9,\\r                                    \\\"end\\\": 39\\r                                },\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 0,\\r                                \\\"start\\\": 7,\\r                                \\\"end\\\": 41\\r                            },\\r                            \\\"flags\\\": 3,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 0,\\r                            \\\"end\\\": 41\\r                        }\\r                    ],\\r                    \\\"flags\\\": 0,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 3,\\r                    \\\"end\\\": 41\\r                },\\r                \\\"flags\\\": 0,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 0,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 41\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 41\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 41\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"var v = { * foo() {\\\\n    yield(foo);\\\\n  }\\\\n}\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 2097397,\\r\\n                \\\"declarationList\\\": {\\r\\n                    \\\"kind\\\": 244,\\r\\n                    \\\"declarations\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 243,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"v\\\",\\r\\n                                \\\"rawText\\\": \\\"v\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 3,\\r\\n                                \\\"end\\\": 5\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": null,\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 67224232,\\r\\n                                \\\"propertyList\\\": {\\r\\n                                    \\\"kind\\\": 65722,\\r\\n                                    \\\"properties\\\": [\\r\\n                                        {\\r\\n                                            \\\"kind\\\": 17303650,\\r\\n                                            \\\"name\\\": {\\r\\n                                                \\\"kind\\\": 196711,\\r\\n                                                \\\"text\\\": \\\"foo\\\",\\r\\n                                                \\\"rawText\\\": \\\"foo\\\",\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 11,\\r\\n                                                \\\"end\\\": 15\\r\\n                                            },\\r\\n                                            \\\"formalParameters\\\": {\\r\\n                                                \\\"kind\\\": 90,\\r\\n                                                \\\"formalParameterList\\\": [],\\r\\n                                                \\\"trailingComma\\\": false,\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 16,\\r\\n                                                \\\"end\\\": 17\\r\\n                                            },\\r\\n                                            \\\"isSetter\\\": false,\\r\\n                                            \\\"isGetter\\\": false,\\r\\n                                            \\\"contents\\\": {\\r\\n                                                \\\"kind\\\": 91,\\r\\n                                                \\\"functionStatementList\\\": {\\r\\n                                                    \\\"kind\\\": 94,\\r\\n                                                    \\\"statements\\\": [\\r\\n                                                        {\\r\\n                                                            \\\"kind\\\": 2097233,\\r\\n                                                            \\\"expression\\\": {\\r\\n                                                                \\\"kind\\\": 65785,\\r\\n                                                                \\\"delegate\\\": false,\\r\\n                                                                \\\"expression\\\": {\\r\\n                                                                    \\\"kind\\\": 66224,\\r\\n                                                                    \\\"expression\\\": {\\r\\n                                                                        \\\"kind\\\": 196712,\\r\\n                                                                        \\\"text\\\": \\\"foo\\\",\\r\\n                                                                        \\\"rawText\\\": \\\"foo\\\",\\r\\n                                                                        \\\"flags\\\": 0,\\r\\n                                                                        \\\"intersects\\\": false,\\r\\n                                                                        \\\"transformFlags\\\": 0,\\r\\n                                                                        \\\"start\\\": 30,\\r\\n                                                                        \\\"end\\\": 33\\r\\n                                                                    },\\r\\n                                                                    \\\"flags\\\": 0,\\r\\n                                                                    \\\"intersects\\\": false,\\r\\n                                                                    \\\"transformFlags\\\": 0,\\r\\n                                                                    \\\"start\\\": 29,\\r\\n                                                                    \\\"end\\\": 34\\r\\n                                                                },\\r\\n                                                                \\\"flags\\\": 0,\\r\\n                                                                \\\"intersects\\\": false,\\r\\n                                                                \\\"transformFlags\\\": 16393,\\r\\n                                                                \\\"start\\\": 19,\\r\\n                                                                \\\"end\\\": 34\\r\\n                                                            },\\r\\n                                                            \\\"flags\\\": 0,\\r\\n                                                            \\\"intersects\\\": false,\\r\\n                                                            \\\"transformFlags\\\": 0,\\r\\n                                                            \\\"start\\\": 19,\\r\\n                                                            \\\"end\\\": 35\\r\\n                                                        }\\r\\n                                                    ],\\r\\n                                                    \\\"multiline\\\": true,\\r\\n                                                    \\\"flags\\\": 16384,\\r\\n                                                    \\\"intersects\\\": false,\\r\\n                                                    \\\"transformFlags\\\": 0,\\r\\n                                                    \\\"start\\\": 19,\\r\\n                                                    \\\"end\\\": 35\\r\\n                                                },\\r\\n                                                \\\"flags\\\": 16384,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 17,\\r\\n                                                \\\"end\\\": 39\\r\\n                                            },\\r\\n                                            \\\"decorators\\\": null,\\r\\n                                            \\\"type\\\": null,\\r\\n                                            \\\"accessModifier\\\": null,\\r\\n                                            \\\"typeParameters\\\": null,\\r\\n                                            \\\"flags\\\": 0,\\r\\n                                            \\\"intersects\\\": false,\\r\\n                                            \\\"transformFlags\\\": 2097152,\\r\\n                                            \\\"start\\\": 15,\\r\\n                                            \\\"end\\\": 39\\r\\n                                        }\\r\\n                                    ],\\r\\n                                    \\\"trailingComma\\\": false,\\r\\n                                    \\\"multiline\\\": false,\\r\\n                                    \\\"flags\\\": 16384,\\r\\n                                    \\\"intersects\\\": false,\\r\\n                                    \\\"transformFlags\\\": 0,\\r\\n                                    \\\"start\\\": 9,\\r\\n                                    \\\"end\\\": 39\\r\\n                                },\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 7,\\r\\n                                \\\"end\\\": 41\\r\\n                            },\\r\\n                            \\\"flags\\\": 3,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 0,\\r\\n                            \\\"end\\\": 41\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 0,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 3,\\r\\n                    \\\"end\\\": 41\\r\\n                },\\r\\n                \\\"flags\\\": 0,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 0,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 41\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 41\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 41\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 133,\n                        \"end\": 9233\n                    },\n                    \"flags\": 256,\n                    \"start\": 121,\n                    \"end\": 9233\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 9233,\n                    \"end\": 9235\n                },\n                \"flags\": 256,\n                \"start\": 121,\n                \"end\": 9235\n            },\n            \"flags\": 128,\n            \"start\": 121,\n            \"end\": 9235\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 9242,\n                            \"end\": 9250\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 9250,\n                            \"end\": 9258\n                        },\n                        \"flags\": 256,\n                        \"start\": 9242,\n                        \"end\": 9258\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 9258,\n                        \"end\": 9299\n                    },\n                    \"flags\": 256,\n                    \"start\": 9242,\n                    \"end\": 9299\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 9299,\n                    \"end\": 9301\n                },\n                \"flags\": 256,\n                \"start\": 9242,\n                \"end\": 9301\n            },\n            \"flags\": 128,\n            \"start\": 9242,\n            \"end\": 9301\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 9308,\n                            \"end\": 9320\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 9320,\n                            \"end\": 9328\n                        },\n                        \"flags\": 256,\n                        \"start\": 9308,\n                        \"end\": 9328\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 9328,\n                        \"end\": 9344\n                    },\n                    \"flags\": 256,\n                    \"start\": 9308,\n                    \"end\": 9344\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 9344,\n                    \"end\": 9346\n                },\n                \"flags\": 256,\n                \"start\": 9308,\n                \"end\": 9346\n            },\n            \"flags\": 128,\n            \"start\": 9308,\n            \"end\": 9346\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n",
                            "flags": 768,
                            "start": 9380,
                            "end": 38959
                        },
                        "flags": 256,
                        "start": 9372,
                        "end": 38959
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 38959,
                        "end": 38961
                    },
                    "flags": 256,
                    "start": 9372,
                    "end": 38961
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 38961,
                    "end": 38963
                },
                "flags": 256,
                "start": 9372,
                "end": 38963
            },
            "flags": 128,
            "start": 9372,
            "end": 38963
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "js",
                "rawText": "js",
                "flags": 768,
                "start": 38963,
                "end": 38965
            },
            "flags": 128,
            "start": 38963,
            "end": 38965
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 38966,
                "end": 38967
            },
            "flags": 128,
            "start": 38966,
            "end": 38967
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "nvar",
                "rawText": "nvar",
                "flags": 768,
                "start": 38968,
                "end": 38972
            },
            "flags": 128,
            "start": 38968,
            "end": 38972
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "v",
                    "rawText": "v",
                    "flags": 768,
                    "start": 38972,
                    "end": 38974
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 38974,
                    "end": 38976
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 768,
                                    "start": 38980,
                                    "end": 38984
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 1280,
                                    "start": 38985,
                                    "end": 38986
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": false,
                                        "flags": 256,
                                        "start": 38988,
                                        "end": 38988
                                    },
                                    "flags": 256,
                                    "start": 38986,
                                    "end": 38988
                                },
                                "flags": 1280,
                                "start": 38984,
                                "end": 38988
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 38978,
                        "end": 38988
                    },
                    "flags": 256,
                    "start": 38976,
                    "end": 38988
                },
                "flags": 256,
                "start": 38972,
                "end": 38988
            },
            "flags": 128,
            "start": 38972,
            "end": 38988
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 38989,
                "end": 38990
            },
            "flags": 128,
            "start": 38989,
            "end": 38990
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 38991,
                "end": 38992
            },
            "flags": 128,
            "start": 38991,
            "end": 38992
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 768,
                    "start": 38992,
                    "end": 39001
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 39002,
                            "end": 39005
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 39002,
                    "end": 39005
                },
                "flags": 256,
                "start": 38992,
                "end": 39006
            },
            "flags": 128,
            "start": 38992,
            "end": 39007
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 39008,
                "end": 39009
            },
            "flags": 128,
            "start": 39008,
            "end": 39009
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 39010,
                "end": 39011
            },
            "flags": 128,
            "start": 39010,
            "end": 39011
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 39015,
                "end": 39016
            },
            "flags": 128,
            "start": 39015,
            "end": 39016
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 39017,
                "end": 39018
            },
            "flags": 128,
            "start": 39017,
            "end": 39018
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 39020,
                "end": 39021
            },
            "flags": 128,
            "start": 39020,
            "end": 39021
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 226,
                            "member": {
                                "kind": 134299649,
                                "text": "n",
                                "rawText": "n",
                                "flags": 768,
                                "start": 39022,
                                "end": 39023
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 39023,
                                "end": 39025
                            },
                            "flags": 256,
                            "start": 39022,
                            "end": 39025
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 39025,
                            "end": 39027
                        },
                        "flags": 256,
                        "start": 39022,
                        "end": 39027
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n",
                        "rawText": "\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n",
                        "flags": 768,
                        "start": 39027,
                        "end": 39084
                    },
                    "flags": 256,
                    "start": 39022,
                    "end": 39084
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 39084,
                    "end": 39086
                },
                "flags": 256,
                "start": 39022,
                "end": 39086
            },
            "flags": 128,
            "start": 39022,
            "end": 39086
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 39086,
                "end": 39096
            },
            "flags": 128,
            "start": 39086,
            "end": 39096
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 39097,
                "end": 39098
            },
            "flags": 128,
            "start": 39097,
            "end": 39098
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 39099,
                "end": 39100
            },
            "flags": 128,
            "start": 39099,
            "end": 39100
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 39101,
                "end": 39101
            },
            "flags": 128,
            "start": 39100,
            "end": 39101
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 39102,
                "end": 39103
            },
            "flags": 128,
            "start": 39102,
            "end": 39103
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 39104,
                "end": 39105
            },
            "flags": 128,
            "start": 39104,
            "end": 39105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392131,
                        "text": "kind\": 196,\r\n    \"source\": \"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67224232,\r\n                                \"propertyList\": {\r\n                                    \"kind\": 65722,\r\n                                    \"properties\": [\r\n                                        {\r\n                                            \"kind\": 17303650,\r\n                                            \"name\": {\r\n                                                \"kind\": 196711,\r\n                                                \"text\": \"foo\",\r\n                                                \"rawText\": \"foo\",\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 11,\r\n                                                \"end\": 15\r\n                                            },\r\n                                            \"formalParameters\": {\r\n                                                \"kind\": 90,\r\n                                                \"formalParameterList\": [],\r\n                                                \"trailingComma\": false,\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 16,\r\n                                                \"end\": 17\r\n                                            },\r\n                                            \"isSetter\": false,\r\n                                            \"isGetter\": false,\r\n                                            \"contents\": {\r\n                                                \"kind\": 91,\r\n                                                \"functionStatementList\": {\r\n                                                    \"kind\": 94,\r\n                                                    \"statements\": [\r\n                                                        {\r\n                                                            \"kind\": 2097233,\r\n                                                            \"expression\": {\r\n                                                                \"kind\": 65785,\r\n                                                                \"delegate\": false,\r\n                                                                \"expression\": {\r\n                                                                    \"kind\": 66224,\r\n                                                                    \"expression\": {\r\n                                                                        \"kind\": 196712,\r\n                                                                        \"text\": \"foo\",\r\n                                                                        \"rawText\": \"foo\",\r\n                                                                        \"flags\": 0,\r\n                                                                        \"intersects\": false,\r\n                                                                        \"transformFlags\": 0,\r\n                                                                        \"start\": 30,\r\n                                                                        \"end\": 33\r\n                                                                    },\r\n                                                                    \"flags\": 0,\r\n                                                                    \"intersects\": false,\r\n                                                                    \"transformFlags\": 0,\r\n                                                                    \"start\": 29,\r\n                                                                    \"end\": 34\r\n                                                                },\r\n                                                                \"flags\": 0,\r\n                                                                \"intersects\": false,\r\n                                                                \"transformFlags\": 16393,\r\n                                                                \"start\": 19,\r\n                                                                \"end\": 34\r\n                                                            },\r\n                                                            \"flags\": 0,\r\n                                                            \"intersects\": false,\r\n                                                            \"transformFlags\": 0,\r\n                                                            \"start\": 19,\r\n                                                            \"end\": 35\r\n                                                        }\r\n                                                    ],\r\n                                                    \"multiline\": true,\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 19,\r\n                                                    \"end\": 35\r\n                                                },\r\n                                                \"flags\": 16384,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 17,\r\n                                                \"end\": 39\r\n                                            },\r\n                                            \"decorators\": null,\r\n                                            \"type\": null,\r\n                                            \"accessModifier\": null,\r\n                                            \"typeParameters\": null,\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 2097152,\r\n                                            \"start\": 15,\r\n                                            \"end\": 39\r\n                                        }\r\n                                    ],\r\n                                    \"trailingComma\": false,\r\n                                    \"multiline\": false,\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 9,\r\n                                    \"end\": 39\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 41\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 41\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 41\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 41\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 41\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 41\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "rawText": "kind\": 196,\r\n    \"source\": \"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67224232,\r\n                                \"propertyList\": {\r\n                                    \"kind\": 65722,\r\n                                    \"properties\": [\r\n                                        {\r\n                                            \"kind\": 17303650,\r\n                                            \"name\": {\r\n                                                \"kind\": 196711,\r\n                                                \"text\": \"foo\",\r\n                                                \"rawText\": \"foo\",\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 11,\r\n                                                \"end\": 15\r\n                                            },\r\n                                            \"formalParameters\": {\r\n                                                \"kind\": 90,\r\n                                                \"formalParameterList\": [],\r\n                                                \"trailingComma\": false,\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 16,\r\n                                                \"end\": 17\r\n                                            },\r\n                                            \"isSetter\": false,\r\n                                            \"isGetter\": false,\r\n                                            \"contents\": {\r\n                                                \"kind\": 91,\r\n                                                \"functionStatementList\": {\r\n                                                    \"kind\": 94,\r\n                                                    \"statements\": [\r\n                                                        {\r\n                                                            \"kind\": 2097233,\r\n                                                            \"expression\": {\r\n                                                                \"kind\": 65785,\r\n                                                                \"delegate\": false,\r\n                                                                \"expression\": {\r\n                                                                    \"kind\": 66224,\r\n                                                                    \"expression\": {\r\n                                                                        \"kind\": 196712,\r\n                                                                        \"text\": \"foo\",\r\n                                                                        \"rawText\": \"foo\",\r\n                                                                        \"flags\": 0,\r\n                                                                        \"intersects\": false,\r\n                                                                        \"transformFlags\": 0,\r\n                                                                        \"start\": 30,\r\n                                                                        \"end\": 33\r\n                                                                    },\r\n                                                                    \"flags\": 0,\r\n                                                                    \"intersects\": false,\r\n                                                                    \"transformFlags\": 0,\r\n                                                                    \"start\": 29,\r\n                                                                    \"end\": 34\r\n                                                                },\r\n                                                                \"flags\": 0,\r\n                                                                \"intersects\": false,\r\n                                                                \"transformFlags\": 16393,\r\n                                                                \"start\": 19,\r\n                                                                \"end\": 34\r\n                                                            },\r\n                                                            \"flags\": 0,\r\n                                                            \"intersects\": false,\r\n                                                            \"transformFlags\": 0,\r\n                                                            \"start\": 19,\r\n                                                            \"end\": 35\r\n                                                        }\r\n                                                    ],\r\n                                                    \"multiline\": true,\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 19,\r\n                                                    \"end\": 35\r\n                                                },\r\n                                                \"flags\": 16384,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 17,\r\n                                                \"end\": 39\r\n                                            },\r\n                                            \"decorators\": null,\r\n                                            \"type\": null,\r\n                                            \"accessModifier\": null,\r\n                                            \"typeParameters\": null,\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 2097152,\r\n                                            \"start\": 15,\r\n                                            \"end\": 39\r\n                                        }\r\n                                    ],\r\n                                    \"trailingComma\": false,\r\n                                    \"multiline\": false,\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 9,\r\n                                    \"end\": 39\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 41\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 41\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 41\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 41\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 41\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 41\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "flags": 768,
                        "start": 39110,
                        "end": 48982
                    },
                    {
                        "kind": 201392131,
                        "text": "fileName",
                        "rawText": "fileName",
                        "flags": 769,
                        "start": 48983,
                        "end": 48998
                    }
                ],
                "flags": 256,
                "start": 39110,
                "end": 48998
            },
            "flags": 128,
            "start": 39110,
            "end": 48998
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392131,
                        "text": "__root__",
                        "rawText": "__root__",
                        "flags": 768,
                        "start": 48999,
                        "end": 49010
                    },
                    {
                        "kind": 201392131,
                        "text": "flags",
                        "rawText": "flags",
                        "flags": 769,
                        "start": 49011,
                        "end": 49023
                    }
                ],
                "flags": 256,
                "start": 48999,
                "end": 49023
            },
            "flags": 128,
            "start": 48999,
            "end": 49023
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 49024,
                        "end": 49026
                    },
                    {
                        "kind": 201392131,
                        "text": "diagnostics",
                        "rawText": "diagnostics",
                        "flags": 769,
                        "start": 49027,
                        "end": 49045
                    }
                ],
                "flags": 256,
                "start": 49024,
                "end": 49045
            },
            "flags": 128,
            "start": 49024,
            "end": 49045
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49078,
                                                    "end": 49080
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 49058,
                                                    "end": 49077
                                                },
                                                "flags": 256,
                                                "start": 49058,
                                                "end": 49080
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49103,
                                                    "end": 49105
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 49081,
                                                    "end": 49102
                                                },
                                                "flags": 256,
                                                "start": 49081,
                                                "end": 49105
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 49126,
                                                    "end": 49128
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 49106,
                                                    "end": 49125
                                                },
                                                "flags": 256,
                                                "start": 49106,
                                                "end": 49128
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 49150,
                                                    "end": 49170
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 49129,
                                                    "end": 49149
                                                },
                                                "flags": 256,
                                                "start": 49129,
                                                "end": 49170
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6,
                                                    "rawText": "6",
                                                    "flags": 768,
                                                    "start": 49192,
                                                    "end": 49194
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 49171,
                                                    "end": 49191
                                                },
                                                "flags": 256,
                                                "start": 49171,
                                                "end": 49194
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 49214,
                                                    "end": 49217
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 49195,
                                                    "end": 49213
                                                },
                                                "flags": 256,
                                                "start": 49195,
                                                "end": 49217
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 49058,
                                        "end": 49217
                                    },
                                    "flags": 256,
                                    "start": 49048,
                                    "end": 49227
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49258,
                                                    "end": 49260
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 49238,
                                                    "end": 49257
                                                },
                                                "flags": 256,
                                                "start": 49238,
                                                "end": 49260
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49283,
                                                    "end": 49285
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 49261,
                                                    "end": 49282
                                                },
                                                "flags": 256,
                                                "start": 49261,
                                                "end": 49285
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 49306,
                                                    "end": 49308
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 49286,
                                                    "end": 49305
                                                },
                                                "flags": 256,
                                                "start": 49286,
                                                "end": 49308
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 49330,
                                                    "end": 49350
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 49309,
                                                    "end": 49329
                                                },
                                                "flags": 256,
                                                "start": 49309,
                                                "end": 49350
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 49372,
                                                    "end": 49375
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 49351,
                                                    "end": 49371
                                                },
                                                "flags": 256,
                                                "start": 49351,
                                                "end": 49375
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 49395,
                                                    "end": 49398
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 49376,
                                                    "end": 49394
                                                },
                                                "flags": 256,
                                                "start": 49376,
                                                "end": 49398
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 49238,
                                        "end": 49398
                                    },
                                    "flags": 256,
                                    "start": 49228,
                                    "end": 49408
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49439,
                                                    "end": 49441
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 49419,
                                                    "end": 49438
                                                },
                                                "flags": 256,
                                                "start": 49419,
                                                "end": 49441
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49464,
                                                    "end": 49466
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 49442,
                                                    "end": 49463
                                                },
                                                "flags": 256,
                                                "start": 49442,
                                                "end": 49466
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 768,
                                                    "start": 49487,
                                                    "end": 49489
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 49467,
                                                    "end": 49486
                                                },
                                                "flags": 256,
                                                "start": 49467,
                                                "end": 49489
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Statement expected",
                                                    "rawText": "Statement expected",
                                                    "flags": 768,
                                                    "start": 49511,
                                                    "end": 49532
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 49490,
                                                    "end": 49510
                                                },
                                                "flags": 256,
                                                "start": 49490,
                                                "end": 49532
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 49554,
                                                    "end": 49557
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 49533,
                                                    "end": 49553
                                                },
                                                "flags": 256,
                                                "start": 49533,
                                                "end": 49557
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 49577,
                                                    "end": 49580
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 49558,
                                                    "end": 49576
                                                },
                                                "flags": 256,
                                                "start": 49558,
                                                "end": 49580
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 49419,
                                        "end": 49580
                                    },
                                    "flags": 256,
                                    "start": 49409,
                                    "end": 49590
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49621,
                                                    "end": 49623
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 49601,
                                                    "end": 49620
                                                },
                                                "flags": 256,
                                                "start": 49601,
                                                "end": 49623
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49646,
                                                    "end": 49648
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 49624,
                                                    "end": 49645
                                                },
                                                "flags": 256,
                                                "start": 49624,
                                                "end": 49648
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 49669,
                                                    "end": 49671
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 49649,
                                                    "end": 49668
                                                },
                                                "flags": 256,
                                                "start": 49649,
                                                "end": 49671
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 49693,
                                                    "end": 49713
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 49672,
                                                    "end": 49692
                                                },
                                                "flags": 256,
                                                "start": 49672,
                                                "end": 49713
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 49735,
                                                    "end": 49738
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 49714,
                                                    "end": 49734
                                                },
                                                "flags": 256,
                                                "start": 49714,
                                                "end": 49738
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 49758,
                                                    "end": 49761
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 49739,
                                                    "end": 49757
                                                },
                                                "flags": 256,
                                                "start": 49739,
                                                "end": 49761
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 49601,
                                        "end": 49761
                                    },
                                    "flags": 256,
                                    "start": 49591,
                                    "end": 49771
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49802,
                                                    "end": 49804
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 49782,
                                                    "end": 49801
                                                },
                                                "flags": 256,
                                                "start": 49782,
                                                "end": 49804
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 49827,
                                                    "end": 49829
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 49805,
                                                    "end": 49826
                                                },
                                                "flags": 256,
                                                "start": 49805,
                                                "end": 49829
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 49850,
                                                    "end": 49853
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 49830,
                                                    "end": 49849
                                                },
                                                "flags": 256,
                                                "start": 49830,
                                                "end": 49853
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 49875,
                                                    "end": 49934
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 49854,
                                                    "end": 49874
                                                },
                                                "flags": 256,
                                                "start": 49854,
                                                "end": 49934
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 49956,
                                                    "end": 49959
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 49935,
                                                    "end": 49955
                                                },
                                                "flags": 256,
                                                "start": 49935,
                                                "end": 49959
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 49979,
                                                    "end": 49982
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 49960,
                                                    "end": 49978
                                                },
                                                "flags": 256,
                                                "start": 49960,
                                                "end": 49982
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 49782,
                                        "end": 49982
                                    },
                                    "flags": 256,
                                    "start": 49772,
                                    "end": 49992
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50023,
                                                    "end": 50025
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 50003,
                                                    "end": 50022
                                                },
                                                "flags": 256,
                                                "start": 50003,
                                                "end": 50025
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50048,
                                                    "end": 50050
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 50026,
                                                    "end": 50047
                                                },
                                                "flags": 256,
                                                "start": 50026,
                                                "end": 50050
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 50071,
                                                    "end": 50073
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 50051,
                                                    "end": 50070
                                                },
                                                "flags": 256,
                                                "start": 50051,
                                                "end": 50073
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 50095,
                                                    "end": 50115
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 50074,
                                                    "end": 50094
                                                },
                                                "flags": 256,
                                                "start": 50074,
                                                "end": 50115
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 50137,
                                                    "end": 50140
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 50116,
                                                    "end": 50136
                                                },
                                                "flags": 256,
                                                "start": 50116,
                                                "end": 50140
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 50160,
                                                    "end": 50163
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 50141,
                                                    "end": 50159
                                                },
                                                "flags": 256,
                                                "start": 50141,
                                                "end": 50163
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 50003,
                                        "end": 50163
                                    },
                                    "flags": 256,
                                    "start": 49993,
                                    "end": 50173
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50204,
                                                    "end": 50206
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 50184,
                                                    "end": 50203
                                                },
                                                "flags": 256,
                                                "start": 50184,
                                                "end": 50206
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50229,
                                                    "end": 50231
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 50207,
                                                    "end": 50228
                                                },
                                                "flags": 256,
                                                "start": 50207,
                                                "end": 50231
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 50252,
                                                    "end": 50255
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 50232,
                                                    "end": 50251
                                                },
                                                "flags": 256,
                                                "start": 50232,
                                                "end": 50255
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 50277,
                                                    "end": 50336
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 50256,
                                                    "end": 50276
                                                },
                                                "flags": 256,
                                                "start": 50256,
                                                "end": 50336
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 50358,
                                                    "end": 50361
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 50337,
                                                    "end": 50357
                                                },
                                                "flags": 256,
                                                "start": 50337,
                                                "end": 50361
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 50381,
                                                    "end": 50384
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 50362,
                                                    "end": 50380
                                                },
                                                "flags": 256,
                                                "start": 50362,
                                                "end": 50384
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 50184,
                                        "end": 50384
                                    },
                                    "flags": 256,
                                    "start": 50174,
                                    "end": 50394
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50425,
                                                    "end": 50427
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 50405,
                                                    "end": 50424
                                                },
                                                "flags": 256,
                                                "start": 50405,
                                                "end": 50427
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50450,
                                                    "end": 50452
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 50428,
                                                    "end": 50449
                                                },
                                                "flags": 256,
                                                "start": 50428,
                                                "end": 50452
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 50473,
                                                    "end": 50475
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 50453,
                                                    "end": 50472
                                                },
                                                "flags": 256,
                                                "start": 50453,
                                                "end": 50475
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 50497,
                                                    "end": 50517
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 50476,
                                                    "end": 50496
                                                },
                                                "flags": 256,
                                                "start": 50476,
                                                "end": 50517
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 92,
                                                    "rawText": "92",
                                                    "flags": 768,
                                                    "start": 50539,
                                                    "end": 50542
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 50518,
                                                    "end": 50538
                                                },
                                                "flags": 256,
                                                "start": 50518,
                                                "end": 50542
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 97,
                                                    "rawText": "97",
                                                    "flags": 768,
                                                    "start": 50562,
                                                    "end": 50565
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 50543,
                                                    "end": 50561
                                                },
                                                "flags": 256,
                                                "start": 50543,
                                                "end": 50565
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 50405,
                                        "end": 50565
                                    },
                                    "flags": 256,
                                    "start": 50395,
                                    "end": 50575
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50606,
                                                    "end": 50608
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 50586,
                                                    "end": 50605
                                                },
                                                "flags": 256,
                                                "start": 50586,
                                                "end": 50608
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50631,
                                                    "end": 50633
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 50609,
                                                    "end": 50630
                                                },
                                                "flags": 256,
                                                "start": 50609,
                                                "end": 50633
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 50654,
                                                    "end": 50657
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 50634,
                                                    "end": 50653
                                                },
                                                "flags": 256,
                                                "start": 50634,
                                                "end": 50657
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 50679,
                                                    "end": 50738
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 50658,
                                                    "end": 50678
                                                },
                                                "flags": 256,
                                                "start": 50658,
                                                "end": 50738
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 92,
                                                    "rawText": "92",
                                                    "flags": 768,
                                                    "start": 50760,
                                                    "end": 50763
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 50739,
                                                    "end": 50759
                                                },
                                                "flags": 256,
                                                "start": 50739,
                                                "end": 50763
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 97,
                                                    "rawText": "97",
                                                    "flags": 768,
                                                    "start": 50783,
                                                    "end": 50786
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 50764,
                                                    "end": 50782
                                                },
                                                "flags": 256,
                                                "start": 50764,
                                                "end": 50786
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 50586,
                                        "end": 50786
                                    },
                                    "flags": 256,
                                    "start": 50576,
                                    "end": 50796
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50827,
                                                    "end": 50829
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 50807,
                                                    "end": 50826
                                                },
                                                "flags": 256,
                                                "start": 50807,
                                                "end": 50829
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 50852,
                                                    "end": 50854
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 50830,
                                                    "end": 50851
                                                },
                                                "flags": 256,
                                                "start": 50830,
                                                "end": 50854
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 50875,
                                                    "end": 50877
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 50855,
                                                    "end": 50874
                                                },
                                                "flags": 256,
                                                "start": 50855,
                                                "end": 50877
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 50899,
                                                    "end": 50919
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 50878,
                                                    "end": 50898
                                                },
                                                "flags": 256,
                                                "start": 50878,
                                                "end": 50919
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 97,
                                                    "rawText": "97",
                                                    "flags": 768,
                                                    "start": 50941,
                                                    "end": 50944
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 50920,
                                                    "end": 50940
                                                },
                                                "flags": 256,
                                                "start": 50920,
                                                "end": 50944
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 98,
                                                    "rawText": "98",
                                                    "flags": 768,
                                                    "start": 50964,
                                                    "end": 50967
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 50945,
                                                    "end": 50963
                                                },
                                                "flags": 256,
                                                "start": 50945,
                                                "end": 50967
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 50807,
                                        "end": 50967
                                    },
                                    "flags": 256,
                                    "start": 50797,
                                    "end": 50977
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51008,
                                                    "end": 51010
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 50988,
                                                    "end": 51007
                                                },
                                                "flags": 256,
                                                "start": 50988,
                                                "end": 51010
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51033,
                                                    "end": 51035
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 51011,
                                                    "end": 51032
                                                },
                                                "flags": 256,
                                                "start": 51011,
                                                "end": 51035
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 51056,
                                                    "end": 51059
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 51036,
                                                    "end": 51055
                                                },
                                                "flags": 256,
                                                "start": 51036,
                                                "end": 51059
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 51081,
                                                    "end": 51140
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 51060,
                                                    "end": 51080
                                                },
                                                "flags": 256,
                                                "start": 51060,
                                                "end": 51140
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 97,
                                                    "rawText": "97",
                                                    "flags": 768,
                                                    "start": 51162,
                                                    "end": 51165
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 51141,
                                                    "end": 51161
                                                },
                                                "flags": 256,
                                                "start": 51141,
                                                "end": 51165
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 98,
                                                    "rawText": "98",
                                                    "flags": 768,
                                                    "start": 51185,
                                                    "end": 51188
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 51166,
                                                    "end": 51184
                                                },
                                                "flags": 256,
                                                "start": 51166,
                                                "end": 51188
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 50988,
                                        "end": 51188
                                    },
                                    "flags": 256,
                                    "start": 50978,
                                    "end": 51198
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51229,
                                                    "end": 51231
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 51209,
                                                    "end": 51228
                                                },
                                                "flags": 256,
                                                "start": 51209,
                                                "end": 51231
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51254,
                                                    "end": 51256
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 51232,
                                                    "end": 51253
                                                },
                                                "flags": 256,
                                                "start": 51232,
                                                "end": 51256
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 51277,
                                                    "end": 51279
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 51257,
                                                    "end": 51276
                                                },
                                                "flags": 256,
                                                "start": 51257,
                                                "end": 51279
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 51301,
                                                    "end": 51321
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 51280,
                                                    "end": 51300
                                                },
                                                "flags": 256,
                                                "start": 51280,
                                                "end": 51321
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 105,
                                                    "rawText": "105",
                                                    "flags": 768,
                                                    "start": 51343,
                                                    "end": 51347
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 51322,
                                                    "end": 51342
                                                },
                                                "flags": 256,
                                                "start": 51322,
                                                "end": 51347
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 112,
                                                    "rawText": "112",
                                                    "flags": 768,
                                                    "start": 51367,
                                                    "end": 51371
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 51348,
                                                    "end": 51366
                                                },
                                                "flags": 256,
                                                "start": 51348,
                                                "end": 51371
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 51209,
                                        "end": 51371
                                    },
                                    "flags": 256,
                                    "start": 51199,
                                    "end": 51381
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51412,
                                                    "end": 51414
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 51392,
                                                    "end": 51411
                                                },
                                                "flags": 256,
                                                "start": 51392,
                                                "end": 51414
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51437,
                                                    "end": 51439
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 51415,
                                                    "end": 51436
                                                },
                                                "flags": 256,
                                                "start": 51415,
                                                "end": 51439
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 51460,
                                                    "end": 51463
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 51440,
                                                    "end": 51459
                                                },
                                                "flags": 256,
                                                "start": 51440,
                                                "end": 51463
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 51485,
                                                    "end": 51544
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 51464,
                                                    "end": 51484
                                                },
                                                "flags": 256,
                                                "start": 51464,
                                                "end": 51544
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 105,
                                                    "rawText": "105",
                                                    "flags": 768,
                                                    "start": 51566,
                                                    "end": 51570
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 51545,
                                                    "end": 51565
                                                },
                                                "flags": 256,
                                                "start": 51545,
                                                "end": 51570
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 112,
                                                    "rawText": "112",
                                                    "flags": 768,
                                                    "start": 51590,
                                                    "end": 51594
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 51571,
                                                    "end": 51589
                                                },
                                                "flags": 256,
                                                "start": 51571,
                                                "end": 51594
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 51392,
                                        "end": 51594
                                    },
                                    "flags": 256,
                                    "start": 51382,
                                    "end": 51604
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51635,
                                                    "end": 51637
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 51615,
                                                    "end": 51634
                                                },
                                                "flags": 256,
                                                "start": 51615,
                                                "end": 51637
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51660,
                                                    "end": 51662
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 51638,
                                                    "end": 51659
                                                },
                                                "flags": 256,
                                                "start": 51638,
                                                "end": 51662
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 51683,
                                                    "end": 51685
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 51663,
                                                    "end": 51682
                                                },
                                                "flags": 256,
                                                "start": 51663,
                                                "end": 51685
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 51707,
                                                    "end": 51727
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 51686,
                                                    "end": 51706
                                                },
                                                "flags": 256,
                                                "start": 51686,
                                                "end": 51727
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 112,
                                                    "rawText": "112",
                                                    "flags": 768,
                                                    "start": 51749,
                                                    "end": 51753
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 51728,
                                                    "end": 51748
                                                },
                                                "flags": 256,
                                                "start": 51728,
                                                "end": 51753
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 113,
                                                    "rawText": "113",
                                                    "flags": 768,
                                                    "start": 51773,
                                                    "end": 51777
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 51754,
                                                    "end": 51772
                                                },
                                                "flags": 256,
                                                "start": 51754,
                                                "end": 51777
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 51615,
                                        "end": 51777
                                    },
                                    "flags": 256,
                                    "start": 51605,
                                    "end": 51787
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51818,
                                                    "end": 51820
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 51798,
                                                    "end": 51817
                                                },
                                                "flags": 256,
                                                "start": 51798,
                                                "end": 51820
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 51843,
                                                    "end": 51845
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 51821,
                                                    "end": 51842
                                                },
                                                "flags": 256,
                                                "start": 51821,
                                                "end": 51845
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 51866,
                                                    "end": 51869
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 51846,
                                                    "end": 51865
                                                },
                                                "flags": 256,
                                                "start": 51846,
                                                "end": 51869
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 51891,
                                                    "end": 51950
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 51870,
                                                    "end": 51890
                                                },
                                                "flags": 256,
                                                "start": 51870,
                                                "end": 51950
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 112,
                                                    "rawText": "112",
                                                    "flags": 768,
                                                    "start": 51972,
                                                    "end": 51976
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 51951,
                                                    "end": 51971
                                                },
                                                "flags": 256,
                                                "start": 51951,
                                                "end": 51976
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 113,
                                                    "rawText": "113",
                                                    "flags": 768,
                                                    "start": 51996,
                                                    "end": 52000
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 51977,
                                                    "end": 51995
                                                },
                                                "flags": 256,
                                                "start": 51977,
                                                "end": 52000
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 51798,
                                        "end": 52000
                                    },
                                    "flags": 256,
                                    "start": 51788,
                                    "end": 52010
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52041,
                                                    "end": 52043
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 52021,
                                                    "end": 52040
                                                },
                                                "flags": 256,
                                                "start": 52021,
                                                "end": 52043
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52066,
                                                    "end": 52068
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 52044,
                                                    "end": 52065
                                                },
                                                "flags": 256,
                                                "start": 52044,
                                                "end": 52068
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 52089,
                                                    "end": 52091
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 52069,
                                                    "end": 52088
                                                },
                                                "flags": 256,
                                                "start": 52069,
                                                "end": 52091
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 52113,
                                                    "end": 52133
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 52092,
                                                    "end": 52112
                                                },
                                                "flags": 256,
                                                "start": 52092,
                                                "end": 52133
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 113,
                                                    "rawText": "113",
                                                    "flags": 768,
                                                    "start": 52155,
                                                    "end": 52159
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 52134,
                                                    "end": 52154
                                                },
                                                "flags": 256,
                                                "start": 52134,
                                                "end": 52159
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 114,
                                                    "rawText": "114",
                                                    "flags": 768,
                                                    "start": 52179,
                                                    "end": 52183
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 52160,
                                                    "end": 52178
                                                },
                                                "flags": 256,
                                                "start": 52160,
                                                "end": 52183
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 52021,
                                        "end": 52183
                                    },
                                    "flags": 256,
                                    "start": 52011,
                                    "end": 52193
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52224,
                                                    "end": 52226
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 52204,
                                                    "end": 52223
                                                },
                                                "flags": 256,
                                                "start": 52204,
                                                "end": 52226
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52249,
                                                    "end": 52251
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 52227,
                                                    "end": 52248
                                                },
                                                "flags": 256,
                                                "start": 52227,
                                                "end": 52251
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 52272,
                                                    "end": 52275
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 52252,
                                                    "end": 52271
                                                },
                                                "flags": 256,
                                                "start": 52252,
                                                "end": 52275
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 52297,
                                                    "end": 52356
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 52276,
                                                    "end": 52296
                                                },
                                                "flags": 256,
                                                "start": 52276,
                                                "end": 52356
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 113,
                                                    "rawText": "113",
                                                    "flags": 768,
                                                    "start": 52378,
                                                    "end": 52382
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 52357,
                                                    "end": 52377
                                                },
                                                "flags": 256,
                                                "start": 52357,
                                                "end": 52382
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 114,
                                                    "rawText": "114",
                                                    "flags": 768,
                                                    "start": 52402,
                                                    "end": 52406
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 52383,
                                                    "end": 52401
                                                },
                                                "flags": 256,
                                                "start": 52383,
                                                "end": 52406
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 52204,
                                        "end": 52406
                                    },
                                    "flags": 256,
                                    "start": 52194,
                                    "end": 52416
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52447,
                                                    "end": 52449
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 52427,
                                                    "end": 52446
                                                },
                                                "flags": 256,
                                                "start": 52427,
                                                "end": 52449
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52472,
                                                    "end": 52474
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 52450,
                                                    "end": 52471
                                                },
                                                "flags": 256,
                                                "start": 52450,
                                                "end": 52474
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 52495,
                                                    "end": 52497
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 52475,
                                                    "end": 52494
                                                },
                                                "flags": 256,
                                                "start": 52475,
                                                "end": 52497
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 52519,
                                                    "end": 52539
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 52498,
                                                    "end": 52518
                                                },
                                                "flags": 256,
                                                "start": 52498,
                                                "end": 52539
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 121,
                                                    "rawText": "121",
                                                    "flags": 768,
                                                    "start": 52561,
                                                    "end": 52565
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 52540,
                                                    "end": 52560
                                                },
                                                "flags": 256,
                                                "start": 52540,
                                                "end": 52565
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 125,
                                                    "rawText": "125",
                                                    "flags": 768,
                                                    "start": 52585,
                                                    "end": 52589
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 52566,
                                                    "end": 52584
                                                },
                                                "flags": 256,
                                                "start": 52566,
                                                "end": 52589
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 52427,
                                        "end": 52589
                                    },
                                    "flags": 256,
                                    "start": 52417,
                                    "end": 52599
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52630,
                                                    "end": 52632
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 52610,
                                                    "end": 52629
                                                },
                                                "flags": 256,
                                                "start": 52610,
                                                "end": 52632
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52655,
                                                    "end": 52657
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 52633,
                                                    "end": 52654
                                                },
                                                "flags": 256,
                                                "start": 52633,
                                                "end": 52657
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 52678,
                                                    "end": 52680
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 52658,
                                                    "end": 52677
                                                },
                                                "flags": 256,
                                                "start": 52658,
                                                "end": 52680
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 52702,
                                                    "end": 52722
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 52681,
                                                    "end": 52701
                                                },
                                                "flags": 256,
                                                "start": 52681,
                                                "end": 52722
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9235,
                                                    "rawText": "9235",
                                                    "flags": 768,
                                                    "start": 52744,
                                                    "end": 52749
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 52723,
                                                    "end": 52743
                                                },
                                                "flags": 256,
                                                "start": 52723,
                                                "end": 52749
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9240,
                                                    "rawText": "9240",
                                                    "flags": 768,
                                                    "start": 52769,
                                                    "end": 52774
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 52750,
                                                    "end": 52768
                                                },
                                                "flags": 256,
                                                "start": 52750,
                                                "end": 52774
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 52610,
                                        "end": 52774
                                    },
                                    "flags": 256,
                                    "start": 52600,
                                    "end": 52784
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52815,
                                                    "end": 52817
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 52795,
                                                    "end": 52814
                                                },
                                                "flags": 256,
                                                "start": 52795,
                                                "end": 52817
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 52840,
                                                    "end": 52842
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 52818,
                                                    "end": 52839
                                                },
                                                "flags": 256,
                                                "start": 52818,
                                                "end": 52842
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 52863,
                                                    "end": 52866
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 52843,
                                                    "end": 52862
                                                },
                                                "flags": 256,
                                                "start": 52843,
                                                "end": 52866
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 52888,
                                                    "end": 52947
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 52867,
                                                    "end": 52887
                                                },
                                                "flags": 256,
                                                "start": 52867,
                                                "end": 52947
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9235,
                                                    "rawText": "9235",
                                                    "flags": 768,
                                                    "start": 52969,
                                                    "end": 52974
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 52948,
                                                    "end": 52968
                                                },
                                                "flags": 256,
                                                "start": 52948,
                                                "end": 52974
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9240,
                                                    "rawText": "9240",
                                                    "flags": 768,
                                                    "start": 52994,
                                                    "end": 52999
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 52975,
                                                    "end": 52993
                                                },
                                                "flags": 256,
                                                "start": 52975,
                                                "end": 52999
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 52795,
                                        "end": 52999
                                    },
                                    "flags": 256,
                                    "start": 52785,
                                    "end": 53009
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53040,
                                                    "end": 53042
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 53020,
                                                    "end": 53039
                                                },
                                                "flags": 256,
                                                "start": 53020,
                                                "end": 53042
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53065,
                                                    "end": 53067
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 53043,
                                                    "end": 53064
                                                },
                                                "flags": 256,
                                                "start": 53043,
                                                "end": 53067
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 53088,
                                                    "end": 53090
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 53068,
                                                    "end": 53087
                                                },
                                                "flags": 256,
                                                "start": 53068,
                                                "end": 53090
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 53112,
                                                    "end": 53132
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 53091,
                                                    "end": 53111
                                                },
                                                "flags": 256,
                                                "start": 53091,
                                                "end": 53132
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9240,
                                                    "rawText": "9240",
                                                    "flags": 768,
                                                    "start": 53154,
                                                    "end": 53159
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 53133,
                                                    "end": 53153
                                                },
                                                "flags": 256,
                                                "start": 53133,
                                                "end": 53159
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9241,
                                                    "rawText": "9241",
                                                    "flags": 768,
                                                    "start": 53179,
                                                    "end": 53184
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 53160,
                                                    "end": 53178
                                                },
                                                "flags": 256,
                                                "start": 53160,
                                                "end": 53184
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 53020,
                                        "end": 53184
                                    },
                                    "flags": 256,
                                    "start": 53010,
                                    "end": 53194
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53225,
                                                    "end": 53227
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 53205,
                                                    "end": 53224
                                                },
                                                "flags": 256,
                                                "start": 53205,
                                                "end": 53227
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53250,
                                                    "end": 53252
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 53228,
                                                    "end": 53249
                                                },
                                                "flags": 256,
                                                "start": 53228,
                                                "end": 53252
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 53273,
                                                    "end": 53276
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 53253,
                                                    "end": 53272
                                                },
                                                "flags": 256,
                                                "start": 53253,
                                                "end": 53276
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 53298,
                                                    "end": 53357
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 53277,
                                                    "end": 53297
                                                },
                                                "flags": 256,
                                                "start": 53277,
                                                "end": 53357
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9240,
                                                    "rawText": "9240",
                                                    "flags": 768,
                                                    "start": 53379,
                                                    "end": 53384
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 53358,
                                                    "end": 53378
                                                },
                                                "flags": 256,
                                                "start": 53358,
                                                "end": 53384
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9241,
                                                    "rawText": "9241",
                                                    "flags": 768,
                                                    "start": 53404,
                                                    "end": 53409
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 53385,
                                                    "end": 53403
                                                },
                                                "flags": 256,
                                                "start": 53385,
                                                "end": 53409
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 53205,
                                        "end": 53409
                                    },
                                    "flags": 256,
                                    "start": 53195,
                                    "end": 53419
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53450,
                                                    "end": 53452
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 53430,
                                                    "end": 53449
                                                },
                                                "flags": 256,
                                                "start": 53430,
                                                "end": 53452
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53475,
                                                    "end": 53477
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 53453,
                                                    "end": 53474
                                                },
                                                "flags": 256,
                                                "start": 53453,
                                                "end": 53477
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 53498,
                                                    "end": 53500
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 53478,
                                                    "end": 53497
                                                },
                                                "flags": 256,
                                                "start": 53478,
                                                "end": 53500
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 53522,
                                                    "end": 53542
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 53501,
                                                    "end": 53521
                                                },
                                                "flags": 256,
                                                "start": 53501,
                                                "end": 53542
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9241,
                                                    "rawText": "9241",
                                                    "flags": 768,
                                                    "start": 53564,
                                                    "end": 53569
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 53543,
                                                    "end": 53563
                                                },
                                                "flags": 256,
                                                "start": 53543,
                                                "end": 53569
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9242,
                                                    "rawText": "9242",
                                                    "flags": 768,
                                                    "start": 53589,
                                                    "end": 53594
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 53570,
                                                    "end": 53588
                                                },
                                                "flags": 256,
                                                "start": 53570,
                                                "end": 53594
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 53430,
                                        "end": 53594
                                    },
                                    "flags": 256,
                                    "start": 53420,
                                    "end": 53604
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53635,
                                                    "end": 53637
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 53615,
                                                    "end": 53634
                                                },
                                                "flags": 256,
                                                "start": 53615,
                                                "end": 53637
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53660,
                                                    "end": 53662
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 53638,
                                                    "end": 53659
                                                },
                                                "flags": 256,
                                                "start": 53638,
                                                "end": 53662
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 53683,
                                                    "end": 53686
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 53663,
                                                    "end": 53682
                                                },
                                                "flags": 256,
                                                "start": 53663,
                                                "end": 53686
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 53708,
                                                    "end": 53767
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 53687,
                                                    "end": 53707
                                                },
                                                "flags": 256,
                                                "start": 53687,
                                                "end": 53767
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9241,
                                                    "rawText": "9241",
                                                    "flags": 768,
                                                    "start": 53789,
                                                    "end": 53794
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 53768,
                                                    "end": 53788
                                                },
                                                "flags": 256,
                                                "start": 53768,
                                                "end": 53794
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9242,
                                                    "rawText": "9242",
                                                    "flags": 768,
                                                    "start": 53814,
                                                    "end": 53819
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 53795,
                                                    "end": 53813
                                                },
                                                "flags": 256,
                                                "start": 53795,
                                                "end": 53819
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 53615,
                                        "end": 53819
                                    },
                                    "flags": 256,
                                    "start": 53605,
                                    "end": 53829
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53860,
                                                    "end": 53862
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 53840,
                                                    "end": 53859
                                                },
                                                "flags": 256,
                                                "start": 53840,
                                                "end": 53862
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 53885,
                                                    "end": 53887
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 53863,
                                                    "end": 53884
                                                },
                                                "flags": 256,
                                                "start": 53863,
                                                "end": 53887
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 53908,
                                                    "end": 53910
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 53888,
                                                    "end": 53907
                                                },
                                                "flags": 256,
                                                "start": 53888,
                                                "end": 53910
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 53932,
                                                    "end": 53952
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 53911,
                                                    "end": 53931
                                                },
                                                "flags": 256,
                                                "start": 53911,
                                                "end": 53952
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9301,
                                                    "rawText": "9301",
                                                    "flags": 768,
                                                    "start": 53974,
                                                    "end": 53979
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 53953,
                                                    "end": 53973
                                                },
                                                "flags": 256,
                                                "start": 53953,
                                                "end": 53979
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9306,
                                                    "rawText": "9306",
                                                    "flags": 768,
                                                    "start": 53999,
                                                    "end": 54004
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 53980,
                                                    "end": 53998
                                                },
                                                "flags": 256,
                                                "start": 53980,
                                                "end": 54004
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 53840,
                                        "end": 54004
                                    },
                                    "flags": 256,
                                    "start": 53830,
                                    "end": 54014
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54045,
                                                    "end": 54047
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 54025,
                                                    "end": 54044
                                                },
                                                "flags": 256,
                                                "start": 54025,
                                                "end": 54047
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54070,
                                                    "end": 54072
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 54048,
                                                    "end": 54069
                                                },
                                                "flags": 256,
                                                "start": 54048,
                                                "end": 54072
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 54093,
                                                    "end": 54096
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 54073,
                                                    "end": 54092
                                                },
                                                "flags": 256,
                                                "start": 54073,
                                                "end": 54096
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 54118,
                                                    "end": 54177
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 54097,
                                                    "end": 54117
                                                },
                                                "flags": 256,
                                                "start": 54097,
                                                "end": 54177
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9301,
                                                    "rawText": "9301",
                                                    "flags": 768,
                                                    "start": 54199,
                                                    "end": 54204
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 54178,
                                                    "end": 54198
                                                },
                                                "flags": 256,
                                                "start": 54178,
                                                "end": 54204
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9306,
                                                    "rawText": "9306",
                                                    "flags": 768,
                                                    "start": 54224,
                                                    "end": 54229
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 54205,
                                                    "end": 54223
                                                },
                                                "flags": 256,
                                                "start": 54205,
                                                "end": 54229
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 54025,
                                        "end": 54229
                                    },
                                    "flags": 256,
                                    "start": 54015,
                                    "end": 54239
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54270,
                                                    "end": 54272
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 54250,
                                                    "end": 54269
                                                },
                                                "flags": 256,
                                                "start": 54250,
                                                "end": 54272
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54295,
                                                    "end": 54297
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 54273,
                                                    "end": 54294
                                                },
                                                "flags": 256,
                                                "start": 54273,
                                                "end": 54297
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 54318,
                                                    "end": 54320
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 54298,
                                                    "end": 54317
                                                },
                                                "flags": 256,
                                                "start": 54298,
                                                "end": 54320
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 54342,
                                                    "end": 54362
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 54321,
                                                    "end": 54341
                                                },
                                                "flags": 256,
                                                "start": 54321,
                                                "end": 54362
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9306,
                                                    "rawText": "9306",
                                                    "flags": 768,
                                                    "start": 54384,
                                                    "end": 54389
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 54363,
                                                    "end": 54383
                                                },
                                                "flags": 256,
                                                "start": 54363,
                                                "end": 54389
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9307,
                                                    "rawText": "9307",
                                                    "flags": 768,
                                                    "start": 54409,
                                                    "end": 54414
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 54390,
                                                    "end": 54408
                                                },
                                                "flags": 256,
                                                "start": 54390,
                                                "end": 54414
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 54250,
                                        "end": 54414
                                    },
                                    "flags": 256,
                                    "start": 54240,
                                    "end": 54424
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54455,
                                                    "end": 54457
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 54435,
                                                    "end": 54454
                                                },
                                                "flags": 256,
                                                "start": 54435,
                                                "end": 54457
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54480,
                                                    "end": 54482
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 54458,
                                                    "end": 54479
                                                },
                                                "flags": 256,
                                                "start": 54458,
                                                "end": 54482
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 54503,
                                                    "end": 54506
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 54483,
                                                    "end": 54502
                                                },
                                                "flags": 256,
                                                "start": 54483,
                                                "end": 54506
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 54528,
                                                    "end": 54587
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 54507,
                                                    "end": 54527
                                                },
                                                "flags": 256,
                                                "start": 54507,
                                                "end": 54587
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9306,
                                                    "rawText": "9306",
                                                    "flags": 768,
                                                    "start": 54609,
                                                    "end": 54614
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 54588,
                                                    "end": 54608
                                                },
                                                "flags": 256,
                                                "start": 54588,
                                                "end": 54614
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9307,
                                                    "rawText": "9307",
                                                    "flags": 768,
                                                    "start": 54634,
                                                    "end": 54639
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 54615,
                                                    "end": 54633
                                                },
                                                "flags": 256,
                                                "start": 54615,
                                                "end": 54639
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 54435,
                                        "end": 54639
                                    },
                                    "flags": 256,
                                    "start": 54425,
                                    "end": 54649
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54680,
                                                    "end": 54682
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 54660,
                                                    "end": 54679
                                                },
                                                "flags": 256,
                                                "start": 54660,
                                                "end": 54682
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54705,
                                                    "end": 54707
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 54683,
                                                    "end": 54704
                                                },
                                                "flags": 256,
                                                "start": 54683,
                                                "end": 54707
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 54728,
                                                    "end": 54730
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 54708,
                                                    "end": 54727
                                                },
                                                "flags": 256,
                                                "start": 54708,
                                                "end": 54730
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 54752,
                                                    "end": 54772
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 54731,
                                                    "end": 54751
                                                },
                                                "flags": 256,
                                                "start": 54731,
                                                "end": 54772
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9307,
                                                    "rawText": "9307",
                                                    "flags": 768,
                                                    "start": 54794,
                                                    "end": 54799
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 54773,
                                                    "end": 54793
                                                },
                                                "flags": 256,
                                                "start": 54773,
                                                "end": 54799
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9308,
                                                    "rawText": "9308",
                                                    "flags": 768,
                                                    "start": 54819,
                                                    "end": 54824
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 54800,
                                                    "end": 54818
                                                },
                                                "flags": 256,
                                                "start": 54800,
                                                "end": 54824
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 54660,
                                        "end": 54824
                                    },
                                    "flags": 256,
                                    "start": 54650,
                                    "end": 54834
                                },
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54865,
                                                    "end": 54867
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 54845,
                                                    "end": 54864
                                                },
                                                "flags": 256,
                                                "start": 54845,
                                                "end": 54867
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 54890,
                                                    "end": 54892
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 54868,
                                                    "end": 54889
                                                },
                                                "flags": 256,
                                                "start": 54868,
                                                "end": 54892
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 54913,
                                                    "end": 54916
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 54893,
                                                    "end": 54912
                                                },
                                                "flags": 256,
                                                "start": 54893,
                                                "end": 54916
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 54938,
                                                    "end": 54997
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 54917,
                                                    "end": 54937
                                                },
                                                "flags": 256,
                                                "start": 54917,
                                                "end": 54997
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9307,
                                                    "rawText": "9307",
                                                    "flags": 768,
                                                    "start": 55019,
                                                    "end": 55024
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 54998,
                                                    "end": 55018
                                                },
                                                "flags": 256,
                                                "start": 54998,
                                                "end": 55024
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 9308,
                                                    "rawText": "9308",
                                                    "flags": 768,
                                                    "start": 55044,
                                                    "end": 55049
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 55025,
                                                    "end": 55043
                                                },
                                                "flags": 256,
                                                "start": 55025,
                                                "end": 55049
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 54845,
                                        "end": 55049
                                    },
                                    "flags": 256,
                                    "start": 54835,
                                    "end": 55059
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 49048,
                            "end": 55059
                        },
                        "flags": 256,
                        "start": 49046,
                        "end": 55065
                    },
                    {
                        "kind": 201392131,
                        "text": "start",
                        "rawText": "start",
                        "flags": 769,
                        "start": 55066,
                        "end": 55078
                    }
                ],
                "flags": 256,
                "start": 49046,
                "end": 55078
            },
            "flags": 128,
            "start": 49046,
            "end": 55078
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": 0,
                        "rawText": "0",
                        "flags": 768,
                        "start": 55079,
                        "end": 55081
                    },
                    {
                        "kind": 201392131,
                        "text": "end",
                        "rawText": "end",
                        "flags": 769,
                        "start": 55082,
                        "end": 55092
                    }
                ],
                "flags": 256,
                "start": 55079,
                "end": 55092
            },
            "flags": 128,
            "start": 55079,
            "end": 55092
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 9349,
                "rawText": "9349",
                "flags": 768,
                "start": 55093,
                "end": 55098
            },
            "flags": 128,
            "start": 55093,
            "end": 55098
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 55100,
                        "end": 55103
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Printed\n\n",
                        "rawText": "\n\n### Printed\n\n",
                        "flags": 768,
                        "start": 55103,
                        "end": 55120
                    },
                    "flags": 256,
                    "start": 55100,
                    "end": 55120
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 55120,
                    "end": 55122
                },
                "flags": 256,
                "start": 55100,
                "end": 55122
            },
            "flags": 128,
            "start": 55100,
            "end": 55122
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 55122,
                "end": 55132
            },
            "flags": 128,
            "start": 55122,
            "end": 55132
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 55132,
                "end": 55138
            },
            "flags": 128,
            "start": 55132,
            "end": 55138
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 226,
                            "member": {
                                "kind": 226,
                                "member": {
                                    "kind": 134299649,
                                    "text": "Input",
                                    "rawText": "Input",
                                    "flags": 768,
                                    "start": 55149,
                                    "end": 55155
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 55155,
                                    "end": 55161
                                },
                                "flags": 256,
                                "start": 55149,
                                "end": 55161
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 55161,
                                "end": 55163
                            },
                            "flags": 256,
                            "start": 55149,
                            "end": 55163
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rvar v = { * foo() {\r    yield(foo);\r  }\r}\r",
                            "rawText": "js\r\nvar v = { * foo() {\r\n    yield(foo);\r\n  }\r\n}\r\n",
                            "flags": 768,
                            "start": 55163,
                            "end": 55215
                        },
                        "flags": 256,
                        "start": 55149,
                        "end": 55215
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 55215,
                        "end": 55217
                    },
                    "flags": 256,
                    "start": 55149,
                    "end": 55217
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 55217,
                    "end": 55219
                },
                "flags": 256,
                "start": 55149,
                "end": 55219
            },
            "flags": 128,
            "start": 55149,
            "end": 55219
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 55225,
                "end": 55232
            },
            "flags": 128,
            "start": 55225,
            "end": 55232
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 55241,
                "end": 55248
            },
            "flags": 128,
            "start": 55241,
            "end": 55248
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "CST",
                            "rawText": "CST",
                            "flags": 768,
                            "start": 55248,
                            "end": 55252
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 55252,
                            "end": 55260
                        },
                        "flags": 256,
                        "start": 55248,
                        "end": 55260
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"var v = { * foo() {\n    yield(foo);\n  }\n}\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 2097397,\r                \"declarationList\": {\r                    \"kind\": 244,\r                    \"declarations\": [\r                        {\r                            \"kind\": 243,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"v\",\r                                \"rawText\": \"v\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": {\r                                \"kind\": 67224232,\r                                \"propertyList\": {\r                                    \"kind\": 65722,\r                                    \"properties\": [\r                                        {\r                                            \"kind\": 17303650,\r                                            \"name\": {\r                                                \"kind\": 196711,\r                                                \"text\": \"foo\",\r                                                \"rawText\": \"foo\",\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 11,\r                                                \"end\": 15\r                                            },\r                                            \"formalParameters\": {\r                                                \"kind\": 90,\r                                                \"formalParameterList\": [],\r                                                \"trailingComma\": false,\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 16,\r                                                \"end\": 17\r                                            },\r                                            \"isSetter\": false,\r                                            \"isGetter\": false,\r                                            \"contents\": {\r                                                \"kind\": 91,\r                                                \"functionStatementList\": {\r                                                    \"kind\": 94,\r                                                    \"statements\": [\r                                                        {\r                                                            \"kind\": 2097233,\r                                                            \"expression\": {\r                                                                \"kind\": 65785,\r                                                                \"delegate\": false,\r                                                                \"expression\": {\r                                                                    \"kind\": 66224,\r                                                                    \"expression\": {\r                                                                        \"kind\": 196712,\r                                                                        \"text\": \"foo\",\r                                                                        \"rawText\": \"foo\",\r                                                                        \"flags\": 0,\r                                                                        \"intersects\": false,\r                                                                        \"transformFlags\": 0,\r                                                                        \"start\": 30,\r                                                                        \"end\": 33\r                                                                    },\r                                                                    \"flags\": 0,\r                                                                    \"intersects\": false,\r                                                                    \"transformFlags\": 0,\r                                                                    \"start\": 29,\r                                                                    \"end\": 34\r                                                                },\r                                                                \"flags\": 0,\r                                                                \"intersects\": false,\r                                                                \"transformFlags\": 16393,\r                                                                \"start\": 19,\r                                                                \"end\": 34\r                                                            },\r                                                            \"flags\": 0,\r                                                            \"intersects\": false,\r                                                            \"transformFlags\": 0,\r                                                            \"start\": 19,\r                                                            \"end\": 35\r                                                        }\r                                                    ],\r                                                    \"multiline\": true,\r                                                    \"flags\": 16384,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 19,\r                                                    \"end\": 35\r                                                },\r                                                \"flags\": 16384,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 17,\r                                                \"end\": 39\r                                            },\r                                            \"decorators\": null,\r                                            \"type\": null,\r                                            \"accessModifier\": null,\r                                            \"typeParameters\": null,\r                                            \"flags\": 0,\r                                            \"intersects\": false,\r                                            \"transformFlags\": 2097152,\r                                            \"start\": 15,\r                                            \"end\": 39\r                                        }\r                                    ],\r                                    \"trailingComma\": false,\r                                    \"multiline\": false,\r                                    \"flags\": 16384,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 9,\r                                    \"end\": 39\r                                },\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 7,\r                                \"end\": 41\r                            },\r                            \"flags\": 3,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 0,\r                            \"end\": 41\r                        }\r                    ],\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 41\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 0,\r                \"end\": 41\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 41\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 41\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67224232,\r\n                                \"propertyList\": {\r\n                                    \"kind\": 65722,\r\n                                    \"properties\": [\r\n                                        {\r\n                                            \"kind\": 17303650,\r\n                                            \"name\": {\r\n                                                \"kind\": 196711,\r\n                                                \"text\": \"foo\",\r\n                                                \"rawText\": \"foo\",\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 11,\r\n                                                \"end\": 15\r\n                                            },\r\n                                            \"formalParameters\": {\r\n                                                \"kind\": 90,\r\n                                                \"formalParameterList\": [],\r\n                                                \"trailingComma\": false,\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 16,\r\n                                                \"end\": 17\r\n                                            },\r\n                                            \"isSetter\": false,\r\n                                            \"isGetter\": false,\r\n                                            \"contents\": {\r\n                                                \"kind\": 91,\r\n                                                \"functionStatementList\": {\r\n                                                    \"kind\": 94,\r\n                                                    \"statements\": [\r\n                                                        {\r\n                                                            \"kind\": 2097233,\r\n                                                            \"expression\": {\r\n                                                                \"kind\": 65785,\r\n                                                                \"delegate\": false,\r\n                                                                \"expression\": {\r\n                                                                    \"kind\": 66224,\r\n                                                                    \"expression\": {\r\n                                                                        \"kind\": 196712,\r\n                                                                        \"text\": \"foo\",\r\n                                                                        \"rawText\": \"foo\",\r\n                                                                        \"flags\": 0,\r\n                                                                        \"intersects\": false,\r\n                                                                        \"transformFlags\": 0,\r\n                                                                        \"start\": 30,\r\n                                                                        \"end\": 33\r\n                                                                    },\r\n                                                                    \"flags\": 0,\r\n                                                                    \"intersects\": false,\r\n                                                                    \"transformFlags\": 0,\r\n                                                                    \"start\": 29,\r\n                                                                    \"end\": 34\r\n                                                                },\r\n                                                                \"flags\": 0,\r\n                                                                \"intersects\": false,\r\n                                                                \"transformFlags\": 16393,\r\n                                                                \"start\": 19,\r\n                                                                \"end\": 34\r\n                                                            },\r\n                                                            \"flags\": 0,\r\n                                                            \"intersects\": false,\r\n                                                            \"transformFlags\": 0,\r\n                                                            \"start\": 19,\r\n                                                            \"end\": 35\r\n                                                        }\r\n                                                    ],\r\n                                                    \"multiline\": true,\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 19,\r\n                                                    \"end\": 35\r\n                                                },\r\n                                                \"flags\": 16384,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 17,\r\n                                                \"end\": 39\r\n                                            },\r\n                                            \"decorators\": null,\r\n                                            \"type\": null,\r\n                                            \"accessModifier\": null,\r\n                                            \"typeParameters\": null,\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 2097152,\r\n                                            \"start\": 15,\r\n                                            \"end\": 39\r\n                                        }\r\n                                    ],\r\n                                    \"trailingComma\": false,\r\n                                    \"multiline\": false,\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 9,\r\n                                    \"end\": 39\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 41\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 41\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 41\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 41\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 41\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 41\r\n}\r\n",
                        "flags": 768,
                        "start": 55260,
                        "end": 64360
                    },
                    "flags": 256,
                    "start": 55248,
                    "end": 64360
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 64360,
                    "end": 64362
                },
                "flags": 256,
                "start": 55248,
                "end": 64362
            },
            "flags": 128,
            "start": 55248,
            "end": 64362
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "Printed",
                            "rawText": "Printed",
                            "flags": 768,
                            "start": 64369,
                            "end": 64377
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 64377,
                            "end": 64385
                        },
                        "flags": 256,
                        "start": 64369,
                        "end": 64385
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 64385,
                        "end": 64426
                    },
                    "flags": 256,
                    "start": 64369,
                    "end": 64426
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 64426,
                    "end": 64428
                },
                "flags": 256,
                "start": 64369,
                "end": 64428
            },
            "flags": 128,
            "start": 64369,
            "end": 64428
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 226,
                            "member": {
                                "kind": 226,
                                "member": {
                                    "kind": 226,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "Diagnostics",
                                        "rawText": "Diagnostics",
                                        "flags": 768,
                                        "start": 64435,
                                        "end": 64447
                                    },
                                    "template": {
                                        "kind": 458761,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 768,
                                        "start": 64447,
                                        "end": 64455
                                    },
                                    "flags": 256,
                                    "start": 64435,
                                    "end": 64455
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "javascript\r\r",
                                    "rawText": "javascript\r\n\r\n",
                                    "flags": 768,
                                    "start": 64455,
                                    "end": 64471
                                },
                                "flags": 256,
                                "start": 64435,
                                "end": 64471
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 64471,
                                "end": 64473
                            },
                            "flags": 256,
                            "start": 64435,
                            "end": 64473
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 64473,
                            "end": 64479
                        },
                        "flags": 256,
                        "start": 64435,
                        "end": 64479
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Diagnostics\n\n",
                        "rawText": "\n\n### Diagnostics\n\n",
                        "flags": 768,
                        "start": 64479,
                        "end": 64500
                    },
                    "flags": 256,
                    "start": 64435,
                    "end": 64500
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 64500,
                    "end": 64502
                },
                "flags": 256,
                "start": 64435,
                "end": 64502
            },
            "flags": 128,
            "start": 64435,
            "end": 64502
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 64502,
                "end": 64512
            },
            "flags": 128,
            "start": 64502,
            "end": 64512
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 64512,
                "end": 64518
            },
            "flags": 128,
            "start": 64512,
            "end": 64518
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 226,
                            "member": {
                                "kind": 226,
                                "member": {
                                    "kind": 134299649,
                                    "text": "Input",
                                    "rawText": "Input",
                                    "flags": 768,
                                    "start": 64529,
                                    "end": 64535
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 64535,
                                    "end": 64541
                                },
                                "flags": 256,
                                "start": 64529,
                                "end": 64541
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 64541,
                                "end": 64543
                            },
                            "flags": 256,
                            "start": 64529,
                            "end": 64543
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rvar v = { * foo() {\r    yield(foo);\r  }\r}\r",
                            "rawText": "js\r\nvar v = { * foo() {\r\n    yield(foo);\r\n  }\r\n}\r\n",
                            "flags": 768,
                            "start": 64543,
                            "end": 64595
                        },
                        "flags": 256,
                        "start": 64529,
                        "end": 64595
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 64595,
                        "end": 64597
                    },
                    "flags": 256,
                    "start": 64529,
                    "end": 64597
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 64597,
                    "end": 64599
                },
                "flags": 256,
                "start": 64529,
                "end": 64599
            },
            "flags": 128,
            "start": 64529,
            "end": 64599
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 64605,
                "end": 64612
            },
            "flags": 128,
            "start": 64605,
            "end": 64612
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 64621,
                "end": 64628
            },
            "flags": 128,
            "start": 64621,
            "end": 64628
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "CST",
                            "rawText": "CST",
                            "flags": 768,
                            "start": 64628,
                            "end": 64632
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 64632,
                            "end": 64640
                        },
                        "flags": 256,
                        "start": 64628,
                        "end": 64640
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"var v = { * foo() {\n    yield(foo);\n  }\n}\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 2097397,\r                \"declarationList\": {\r                    \"kind\": 244,\r                    \"declarations\": [\r                        {\r                            \"kind\": 243,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"v\",\r                                \"rawText\": \"v\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": {\r                                \"kind\": 67224232,\r                                \"propertyList\": {\r                                    \"kind\": 65722,\r                                    \"properties\": [\r                                        {\r                                            \"kind\": 17303650,\r                                            \"name\": {\r                                                \"kind\": 196711,\r                                                \"text\": \"foo\",\r                                                \"rawText\": \"foo\",\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 11,\r                                                \"end\": 15\r                                            },\r                                            \"formalParameters\": {\r                                                \"kind\": 90,\r                                                \"formalParameterList\": [],\r                                                \"trailingComma\": false,\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 16,\r                                                \"end\": 17\r                                            },\r                                            \"isSetter\": false,\r                                            \"isGetter\": false,\r                                            \"contents\": {\r                                                \"kind\": 91,\r                                                \"functionStatementList\": {\r                                                    \"kind\": 94,\r                                                    \"statements\": [\r                                                        {\r                                                            \"kind\": 2097233,\r                                                            \"expression\": {\r                                                                \"kind\": 65785,\r                                                                \"delegate\": false,\r                                                                \"expression\": {\r                                                                    \"kind\": 66224,\r                                                                    \"expression\": {\r                                                                        \"kind\": 196712,\r                                                                        \"text\": \"foo\",\r                                                                        \"rawText\": \"foo\",\r                                                                        \"flags\": 0,\r                                                                        \"intersects\": false,\r                                                                        \"transformFlags\": 0,\r                                                                        \"start\": 30,\r                                                                        \"end\": 33\r                                                                    },\r                                                                    \"flags\": 0,\r                                                                    \"intersects\": false,\r                                                                    \"transformFlags\": 0,\r                                                                    \"start\": 29,\r                                                                    \"end\": 34\r                                                                },\r                                                                \"flags\": 0,\r                                                                \"intersects\": false,\r                                                                \"transformFlags\": 16393,\r                                                                \"start\": 19,\r                                                                \"end\": 34\r                                                            },\r                                                            \"flags\": 0,\r                                                            \"intersects\": false,\r                                                            \"transformFlags\": 0,\r                                                            \"start\": 19,\r                                                            \"end\": 35\r                                                        }\r                                                    ],\r                                                    \"multiline\": true,\r                                                    \"flags\": 16384,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 19,\r                                                    \"end\": 35\r                                                },\r                                                \"flags\": 16384,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 17,\r                                                \"end\": 39\r                                            },\r                                            \"decorators\": null,\r                                            \"type\": null,\r                                            \"accessModifier\": null,\r                                            \"typeParameters\": null,\r                                            \"flags\": 0,\r                                            \"intersects\": false,\r                                            \"transformFlags\": 2097152,\r                                            \"start\": 15,\r                                            \"end\": 39\r                                        }\r                                    ],\r                                    \"trailingComma\": false,\r                                    \"multiline\": false,\r                                    \"flags\": 16384,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 9,\r                                    \"end\": 39\r                                },\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 7,\r                                \"end\": 41\r                            },\r                            \"flags\": 3,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 0,\r                            \"end\": 41\r                        }\r                    ],\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 41\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 0,\r                \"end\": 41\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 41\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 41\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67224232,\r\n                                \"propertyList\": {\r\n                                    \"kind\": 65722,\r\n                                    \"properties\": [\r\n                                        {\r\n                                            \"kind\": 17303650,\r\n                                            \"name\": {\r\n                                                \"kind\": 196711,\r\n                                                \"text\": \"foo\",\r\n                                                \"rawText\": \"foo\",\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 11,\r\n                                                \"end\": 15\r\n                                            },\r\n                                            \"formalParameters\": {\r\n                                                \"kind\": 90,\r\n                                                \"formalParameterList\": [],\r\n                                                \"trailingComma\": false,\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 16,\r\n                                                \"end\": 17\r\n                                            },\r\n                                            \"isSetter\": false,\r\n                                            \"isGetter\": false,\r\n                                            \"contents\": {\r\n                                                \"kind\": 91,\r\n                                                \"functionStatementList\": {\r\n                                                    \"kind\": 94,\r\n                                                    \"statements\": [\r\n                                                        {\r\n                                                            \"kind\": 2097233,\r\n                                                            \"expression\": {\r\n                                                                \"kind\": 65785,\r\n                                                                \"delegate\": false,\r\n                                                                \"expression\": {\r\n                                                                    \"kind\": 66224,\r\n                                                                    \"expression\": {\r\n                                                                        \"kind\": 196712,\r\n                                                                        \"text\": \"foo\",\r\n                                                                        \"rawText\": \"foo\",\r\n                                                                        \"flags\": 0,\r\n                                                                        \"intersects\": false,\r\n                                                                        \"transformFlags\": 0,\r\n                                                                        \"start\": 30,\r\n                                                                        \"end\": 33\r\n                                                                    },\r\n                                                                    \"flags\": 0,\r\n                                                                    \"intersects\": false,\r\n                                                                    \"transformFlags\": 0,\r\n                                                                    \"start\": 29,\r\n                                                                    \"end\": 34\r\n                                                                },\r\n                                                                \"flags\": 0,\r\n                                                                \"intersects\": false,\r\n                                                                \"transformFlags\": 16393,\r\n                                                                \"start\": 19,\r\n                                                                \"end\": 34\r\n                                                            },\r\n                                                            \"flags\": 0,\r\n                                                            \"intersects\": false,\r\n                                                            \"transformFlags\": 0,\r\n                                                            \"start\": 19,\r\n                                                            \"end\": 35\r\n                                                        }\r\n                                                    ],\r\n                                                    \"multiline\": true,\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 19,\r\n                                                    \"end\": 35\r\n                                                },\r\n                                                \"flags\": 16384,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 17,\r\n                                                \"end\": 39\r\n                                            },\r\n                                            \"decorators\": null,\r\n                                            \"type\": null,\r\n                                            \"accessModifier\": null,\r\n                                            \"typeParameters\": null,\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 2097152,\r\n                                            \"start\": 15,\r\n                                            \"end\": 39\r\n                                        }\r\n                                    ],\r\n                                    \"trailingComma\": false,\r\n                                    \"multiline\": false,\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 9,\r\n                                    \"end\": 39\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 41\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 41\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 41\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 41\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 41\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 41\r\n}\r\n",
                        "flags": 768,
                        "start": 64640,
                        "end": 73740
                    },
                    "flags": 256,
                    "start": 64628,
                    "end": 73740
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 73740,
                    "end": 73742
                },
                "flags": 256,
                "start": 64628,
                "end": 73742
            },
            "flags": 128,
            "start": 64628,
            "end": 73742
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "Printed",
                            "rawText": "Printed",
                            "flags": 768,
                            "start": 73749,
                            "end": 73757
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 73757,
                            "end": 73765
                        },
                        "flags": 256,
                        "start": 73749,
                        "end": 73765
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 73765,
                        "end": 73806
                    },
                    "flags": 256,
                    "start": 73749,
                    "end": 73806
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 73806,
                    "end": 73808
                },
                "flags": 256,
                "start": 73749,
                "end": 73808
            },
            "flags": 128,
            "start": 73749,
            "end": 73808
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 226,
                            "member": {
                                "kind": 226,
                                "member": {
                                    "kind": 134299649,
                                    "text": "Diagnostics",
                                    "rawText": "Diagnostics",
                                    "flags": 768,
                                    "start": 73815,
                                    "end": 73827
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 73827,
                                    "end": 73835
                                },
                                "flags": 256,
                                "start": 73815,
                                "end": 73835
                            },
                            "template": {
                                "kind": 458761,
                                "text": "javascript\r\r",
                                "rawText": "javascript\r\n\r\n",
                                "flags": 768,
                                "start": 73835,
                                "end": 73851
                            },
                            "flags": 256,
                            "start": 73815,
                            "end": 73851
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 73851,
                            "end": 73853
                        },
                        "flags": 256,
                        "start": 73815,
                        "end": 73853
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 73853,
                        "end": 73859
                    },
                    "flags": 256,
                    "start": 73815,
                    "end": 73859
                },
                "template": {
                    "kind": 458761,
                    "text": "\n",
                    "rawText": "",
                    "flags": 768,
                    "start": 73859,
                    "end": 73861
                },
                "flags": 256,
                "start": 73815,
                "end": 73861
            },
            "flags": 128,
            "start": 73815,
            "end": 73861
        }
    ],
    "isModule": false,
    "text": "parser test case\r\n\r\n## Input\r\n\r\n`````js\r\nvar v = { * foo() {\r\n    yield(foo);\r\n  }\r\n}\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67224232,\r\n                                \"propertyList\": {\r\n                                    \"kind\": 65722,\r\n                                    \"properties\": [\r\n                                        {\r\n                                            \"kind\": 17303650,\r\n                                            \"name\": {\r\n                                                \"kind\": 196711,\r\n                                                \"text\": \"foo\",\r\n                                                \"rawText\": \"foo\",\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 11,\r\n                                                \"end\": 15\r\n                                            },\r\n                                            \"formalParameters\": {\r\n                                                \"kind\": 90,\r\n                                                \"formalParameterList\": [],\r\n                                                \"trailingComma\": false,\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 16,\r\n                                                \"end\": 17\r\n                                            },\r\n                                            \"isSetter\": false,\r\n                                            \"isGetter\": false,\r\n                                            \"contents\": {\r\n                                                \"kind\": 91,\r\n                                                \"functionStatementList\": {\r\n                                                    \"kind\": 94,\r\n                                                    \"statements\": [\r\n                                                        {\r\n                                                            \"kind\": 2097233,\r\n                                                            \"expression\": {\r\n                                                                \"kind\": 65785,\r\n                                                                \"delegate\": false,\r\n                                                                \"expression\": {\r\n                                                                    \"kind\": 66224,\r\n                                                                    \"expression\": {\r\n                                                                        \"kind\": 196712,\r\n                                                                        \"text\": \"foo\",\r\n                                                                        \"rawText\": \"foo\",\r\n                                                                        \"flags\": 0,\r\n                                                                        \"intersects\": false,\r\n                                                                        \"transformFlags\": 0,\r\n                                                                        \"start\": 30,\r\n                                                                        \"end\": 33\r\n                                                                    },\r\n                                                                    \"flags\": 0,\r\n                                                                    \"intersects\": false,\r\n                                                                    \"transformFlags\": 0,\r\n                                                                    \"start\": 29,\r\n                                                                    \"end\": 34\r\n                                                                },\r\n                                                                \"flags\": 0,\r\n                                                                \"intersects\": false,\r\n                                                                \"transformFlags\": 16393,\r\n                                                                \"start\": 19,\r\n                                                                \"end\": 34\r\n                                                            },\r\n                                                            \"flags\": 0,\r\n                                                            \"intersects\": false,\r\n                                                            \"transformFlags\": 0,\r\n                                                            \"start\": 19,\r\n                                                            \"end\": 35\r\n                                                        }\r\n                                                    ],\r\n                                                    \"multiline\": true,\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 19,\r\n                                                    \"end\": 35\r\n                                                },\r\n                                                \"flags\": 16384,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 17,\r\n                                                \"end\": 39\r\n                                            },\r\n                                            \"decorators\": null,\r\n                                            \"type\": null,\r\n                                            \"accessModifier\": null,\r\n                                            \"typeParameters\": null,\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 2097152,\r\n                                            \"start\": 15,\r\n                                            \"end\": 39\r\n                                        }\r\n                                    ],\r\n                                    \"trailingComma\": false,\r\n                                    \"multiline\": false,\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 9,\r\n                                    \"end\": 39\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 41\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 41\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 41\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 41\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 41\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 41\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n\n## Output\n\n### Hybrid CST\n\n```javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\rvar v = { * foo() {\\r    yield(foo);\\r  }\\r}\\r\",\n                            \"rawText\": \"js\\r\\nvar v = { * foo() {\\r\\n    yield(foo);\\r\\n  }\\r\\n}\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 88\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 88\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 88,\n                        \"end\": 90\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 90\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 90,\n                    \"end\": 92\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 92\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 92\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 98,\n                \"end\": 105\n            },\n            \"flags\": 128,\n            \"start\": 98,\n            \"end\": 105\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 114,\n                \"end\": 121\n            },\n            \"flags\": 128,\n            \"start\": 114,\n            \"end\": 121\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 121,\n                            \"end\": 125\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 125,\n                            \"end\": 133\n                        },\n                        \"flags\": 256,\n                        \"start\": 121,\n                        \"end\": 133\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 2097397,\\r                \\\"declarationList\\\": {\\r                    \\\"kind\\\": 244,\\r                    \\\"declarations\\\": [\\r                        {\\r                            \\\"kind\\\": 243,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"v\\\",\\r                                \\\"rawText\\\": \\\"v\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 3,\\r                                \\\"end\\\": 5\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": null,\\r                            \\\"initializer\\\": {\\r                                \\\"kind\\\": 67224232,\\r                                \\\"propertyList\\\": {\\r                                    \\\"kind\\\": 65722,\\r                                    \\\"properties\\\": [\\r                                        {\\r                                            \\\"kind\\\": 17303650,\\r                                            \\\"name\\\": {\\r                                                \\\"kind\\\": 196711,\\r                                                \\\"text\\\": \\\"foo\\\",\\r                                                \\\"rawText\\\": \\\"foo\\\",\\r                                                \\\"flags\\\": 0,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 11,\\r                                                \\\"end\\\": 15\\r                                            },\\r                                            \\\"formalParameters\\\": {\\r                                                \\\"kind\\\": 90,\\r                                                \\\"formalParameterList\\\": [],\\r                                                \\\"trailingComma\\\": false,\\r                                                \\\"flags\\\": 0,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 16,\\r                                                \\\"end\\\": 17\\r                                            },\\r                                            \\\"isSetter\\\": false,\\r                                            \\\"isGetter\\\": false,\\r                                            \\\"contents\\\": {\\r                                                \\\"kind\\\": 91,\\r                                                \\\"functionStatementList\\\": {\\r                                                    \\\"kind\\\": 94,\\r                                                    \\\"statements\\\": [\\r                                                        {\\r                                                            \\\"kind\\\": 2097233,\\r                                                            \\\"expression\\\": {\\r                                                                \\\"kind\\\": 65785,\\r                                                                \\\"delegate\\\": false,\\r                                                                \\\"expression\\\": {\\r                                                                    \\\"kind\\\": 66224,\\r                                                                    \\\"expression\\\": {\\r                                                                        \\\"kind\\\": 196712,\\r                                                                        \\\"text\\\": \\\"foo\\\",\\r                                                                        \\\"rawText\\\": \\\"foo\\\",\\r                                                                        \\\"flags\\\": 0,\\r                                                                        \\\"intersects\\\": false,\\r                                                                        \\\"transformFlags\\\": 0,\\r                                                                        \\\"start\\\": 30,\\r                                                                        \\\"end\\\": 33\\r                                                                    },\\r                                                                    \\\"flags\\\": 0,\\r                                                                    \\\"intersects\\\": false,\\r                                                                    \\\"transformFlags\\\": 0,\\r                                                                    \\\"start\\\": 29,\\r                                                                    \\\"end\\\": 34\\r                                                                },\\r                                                                \\\"flags\\\": 0,\\r                                                                \\\"intersects\\\": false,\\r                                                                \\\"transformFlags\\\": 16393,\\r                                                                \\\"start\\\": 19,\\r                                                                \\\"end\\\": 34\\r                                                            },\\r                                                            \\\"flags\\\": 0,\\r                                                            \\\"intersects\\\": false,\\r                                                            \\\"transformFlags\\\": 0,\\r                                                            \\\"start\\\": 19,\\r                                                            \\\"end\\\": 35\\r                                                        }\\r                                                    ],\\r                                                    \\\"multiline\\\": true,\\r                                                    \\\"flags\\\": 16384,\\r                                                    \\\"intersects\\\": false,\\r                                                    \\\"transformFlags\\\": 0,\\r                                                    \\\"start\\\": 19,\\r                                                    \\\"end\\\": 35\\r                                                },\\r                                                \\\"flags\\\": 16384,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 17,\\r                                                \\\"end\\\": 39\\r                                            },\\r                                            \\\"decorators\\\": null,\\r                                            \\\"type\\\": null,\\r                                            \\\"accessModifier\\\": null,\\r                                            \\\"typeParameters\\\": null,\\r                                            \\\"flags\\\": 0,\\r                                            \\\"intersects\\\": false,\\r                                            \\\"transformFlags\\\": 2097152,\\r                                            \\\"start\\\": 15,\\r                                            \\\"end\\\": 39\\r                                        }\\r                                    ],\\r                                    \\\"trailingComma\\\": false,\\r                                    \\\"multiline\\\": false,\\r                                    \\\"flags\\\": 16384,\\r                                    \\\"intersects\\\": false,\\r                                    \\\"transformFlags\\\": 0,\\r                                    \\\"start\\\": 9,\\r                                    \\\"end\\\": 39\\r                                },\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 0,\\r                                \\\"start\\\": 7,\\r                                \\\"end\\\": 41\\r                            },\\r                            \\\"flags\\\": 3,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 0,\\r                            \\\"end\\\": 41\\r                        }\\r                    ],\\r                    \\\"flags\\\": 0,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 3,\\r                    \\\"end\\\": 41\\r                },\\r                \\\"flags\\\": 0,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 0,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 41\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 41\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 41\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"var v = { * foo() {\\\\n    yield(foo);\\\\n  }\\\\n}\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 2097397,\\r\\n                \\\"declarationList\\\": {\\r\\n                    \\\"kind\\\": 244,\\r\\n                    \\\"declarations\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 243,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"v\\\",\\r\\n                                \\\"rawText\\\": \\\"v\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 3,\\r\\n                                \\\"end\\\": 5\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": null,\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 67224232,\\r\\n                                \\\"propertyList\\\": {\\r\\n                                    \\\"kind\\\": 65722,\\r\\n                                    \\\"properties\\\": [\\r\\n                                        {\\r\\n                                            \\\"kind\\\": 17303650,\\r\\n                                            \\\"name\\\": {\\r\\n                                                \\\"kind\\\": 196711,\\r\\n                                                \\\"text\\\": \\\"foo\\\",\\r\\n                                                \\\"rawText\\\": \\\"foo\\\",\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 11,\\r\\n                                                \\\"end\\\": 15\\r\\n                                            },\\r\\n                                            \\\"formalParameters\\\": {\\r\\n                                                \\\"kind\\\": 90,\\r\\n                                                \\\"formalParameterList\\\": [],\\r\\n                                                \\\"trailingComma\\\": false,\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 16,\\r\\n                                                \\\"end\\\": 17\\r\\n                                            },\\r\\n                                            \\\"isSetter\\\": false,\\r\\n                                            \\\"isGetter\\\": false,\\r\\n                                            \\\"contents\\\": {\\r\\n                                                \\\"kind\\\": 91,\\r\\n                                                \\\"functionStatementList\\\": {\\r\\n                                                    \\\"kind\\\": 94,\\r\\n                                                    \\\"statements\\\": [\\r\\n                                                        {\\r\\n                                                            \\\"kind\\\": 2097233,\\r\\n                                                            \\\"expression\\\": {\\r\\n                                                                \\\"kind\\\": 65785,\\r\\n                                                                \\\"delegate\\\": false,\\r\\n                                                                \\\"expression\\\": {\\r\\n                                                                    \\\"kind\\\": 66224,\\r\\n                                                                    \\\"expression\\\": {\\r\\n                                                                        \\\"kind\\\": 196712,\\r\\n                                                                        \\\"text\\\": \\\"foo\\\",\\r\\n                                                                        \\\"rawText\\\": \\\"foo\\\",\\r\\n                                                                        \\\"flags\\\": 0,\\r\\n                                                                        \\\"intersects\\\": false,\\r\\n                                                                        \\\"transformFlags\\\": 0,\\r\\n                                                                        \\\"start\\\": 30,\\r\\n                                                                        \\\"end\\\": 33\\r\\n                                                                    },\\r\\n                                                                    \\\"flags\\\": 0,\\r\\n                                                                    \\\"intersects\\\": false,\\r\\n                                                                    \\\"transformFlags\\\": 0,\\r\\n                                                                    \\\"start\\\": 29,\\r\\n                                                                    \\\"end\\\": 34\\r\\n                                                                },\\r\\n                                                                \\\"flags\\\": 0,\\r\\n                                                                \\\"intersects\\\": false,\\r\\n                                                                \\\"transformFlags\\\": 16393,\\r\\n                                                                \\\"start\\\": 19,\\r\\n                                                                \\\"end\\\": 34\\r\\n                                                            },\\r\\n                                                            \\\"flags\\\": 0,\\r\\n                                                            \\\"intersects\\\": false,\\r\\n                                                            \\\"transformFlags\\\": 0,\\r\\n                                                            \\\"start\\\": 19,\\r\\n                                                            \\\"end\\\": 35\\r\\n                                                        }\\r\\n                                                    ],\\r\\n                                                    \\\"multiline\\\": true,\\r\\n                                                    \\\"flags\\\": 16384,\\r\\n                                                    \\\"intersects\\\": false,\\r\\n                                                    \\\"transformFlags\\\": 0,\\r\\n                                                    \\\"start\\\": 19,\\r\\n                                                    \\\"end\\\": 35\\r\\n                                                },\\r\\n                                                \\\"flags\\\": 16384,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 17,\\r\\n                                                \\\"end\\\": 39\\r\\n                                            },\\r\\n                                            \\\"decorators\\\": null,\\r\\n                                            \\\"type\\\": null,\\r\\n                                            \\\"accessModifier\\\": null,\\r\\n                                            \\\"typeParameters\\\": null,\\r\\n                                            \\\"flags\\\": 0,\\r\\n                                            \\\"intersects\\\": false,\\r\\n                                            \\\"transformFlags\\\": 2097152,\\r\\n                                            \\\"start\\\": 15,\\r\\n                                            \\\"end\\\": 39\\r\\n                                        }\\r\\n                                    ],\\r\\n                                    \\\"trailingComma\\\": false,\\r\\n                                    \\\"multiline\\\": false,\\r\\n                                    \\\"flags\\\": 16384,\\r\\n                                    \\\"intersects\\\": false,\\r\\n                                    \\\"transformFlags\\\": 0,\\r\\n                                    \\\"start\\\": 9,\\r\\n                                    \\\"end\\\": 39\\r\\n                                },\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 7,\\r\\n                                \\\"end\\\": 41\\r\\n                            },\\r\\n                            \\\"flags\\\": 3,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 0,\\r\\n                            \\\"end\\\": 41\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 0,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 3,\\r\\n                    \\\"end\\\": 41\\r\\n                },\\r\\n                \\\"flags\\\": 0,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 0,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 41\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 41\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 41\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 133,\n                        \"end\": 9233\n                    },\n                    \"flags\": 256,\n                    \"start\": 121,\n                    \"end\": 9233\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 9233,\n                    \"end\": 9235\n                },\n                \"flags\": 256,\n                \"start\": 121,\n                \"end\": 9235\n            },\n            \"flags\": 128,\n            \"start\": 121,\n            \"end\": 9235\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 9242,\n                            \"end\": 9250\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 9250,\n                            \"end\": 9258\n                        },\n                        \"flags\": 256,\n                        \"start\": 9242,\n                        \"end\": 9258\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 9258,\n                        \"end\": 9299\n                    },\n                    \"flags\": 256,\n                    \"start\": 9242,\n                    \"end\": 9299\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 9299,\n                    \"end\": 9301\n                },\n                \"flags\": 256,\n                \"start\": 9242,\n                \"end\": 9301\n            },\n            \"flags\": 128,\n            \"start\": 9242,\n            \"end\": 9301\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 9308,\n                            \"end\": 9320\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 9320,\n                            \"end\": 9328\n                        },\n                        \"flags\": 256,\n                        \"start\": 9308,\n                        \"end\": 9328\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 9328,\n                        \"end\": 9344\n                    },\n                    \"flags\": 256,\n                    \"start\": 9308,\n                    \"end\": 9344\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 9344,\n                    \"end\": 9346\n                },\n                \"flags\": 256,\n                \"start\": 9308,\n                \"end\": 9346\n            },\n            \"flags\": 128,\n            \"start\": 9308,\n            \"end\": 9346\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n`````js\\r\\nvar v = { * foo() {\\r\\n    yield(foo);\\r\\n  }\\r\\n}\\r\\n`````\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n```javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"var v = { * foo() {\\\\n    yield(foo);\\\\n  }\\\\n}\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 2097397,\\r\\n                \\\"declarationList\\\": {\\r\\n                    \\\"kind\\\": 244,\\r\\n                    \\\"declarations\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 243,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"v\\\",\\r\\n                                \\\"rawText\\\": \\\"v\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 3,\\r\\n                                \\\"end\\\": 5\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": null,\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 67224232,\\r\\n                                \\\"propertyList\\\": {\\r\\n                                    \\\"kind\\\": 65722,\\r\\n                                    \\\"properties\\\": [\\r\\n                                        {\\r\\n                                            \\\"kind\\\": 17303650,\\r\\n                                            \\\"name\\\": {\\r\\n                                                \\\"kind\\\": 196711,\\r\\n                                                \\\"text\\\": \\\"foo\\\",\\r\\n                                                \\\"rawText\\\": \\\"foo\\\",\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 11,\\r\\n                                                \\\"end\\\": 15\\r\\n                                            },\\r\\n                                            \\\"formalParameters\\\": {\\r\\n                                                \\\"kind\\\": 90,\\r\\n                                                \\\"formalParameterList\\\": [],\\r\\n                                                \\\"trailingComma\\\": false,\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 16,\\r\\n                                                \\\"end\\\": 17\\r\\n                                            },\\r\\n                                            \\\"isSetter\\\": false,\\r\\n                                            \\\"isGetter\\\": false,\\r\\n                                            \\\"contents\\\": {\\r\\n                                                \\\"kind\\\": 91,\\r\\n                                                \\\"functionStatementList\\\": {\\r\\n                                                    \\\"kind\\\": 94,\\r\\n                                                    \\\"statements\\\": [\\r\\n                                                        {\\r\\n                                                            \\\"kind\\\": 2097233,\\r\\n                                                            \\\"expression\\\": {\\r\\n                                                                \\\"kind\\\": 65785,\\r\\n                                                                \\\"delegate\\\": false,\\r\\n                                                                \\\"expression\\\": {\\r\\n                                                                    \\\"kind\\\": 66224,\\r\\n                                                                    \\\"expression\\\": {\\r\\n                                                                        \\\"kind\\\": 196712,\\r\\n                                                                        \\\"text\\\": \\\"foo\\\",\\r\\n                                                                        \\\"rawText\\\": \\\"foo\\\",\\r\\n                                                                        \\\"flags\\\": 0,\\r\\n                                                                        \\\"intersects\\\": false,\\r\\n                                                                        \\\"transformFlags\\\": 0,\\r\\n                                                                        \\\"start\\\": 30,\\r\\n                                                                        \\\"end\\\": 33\\r\\n                                                                    },\\r\\n                                                                    \\\"flags\\\": 0,\\r\\n                                                                    \\\"intersects\\\": false,\\r\\n                                                                    \\\"transformFlags\\\": 0,\\r\\n                                                                    \\\"start\\\": 29,\\r\\n                                                                    \\\"end\\\": 34\\r\\n                                                                },\\r\\n                                                                \\\"flags\\\": 0,\\r\\n                                                                \\\"intersects\\\": false,\\r\\n                                                                \\\"transformFlags\\\": 16393,\\r\\n                                                                \\\"start\\\": 19,\\r\\n                                                                \\\"end\\\": 34\\r\\n                                                            },\\r\\n                                                            \\\"flags\\\": 0,\\r\\n                                                            \\\"intersects\\\": false,\\r\\n                                                            \\\"transformFlags\\\": 0,\\r\\n                                                            \\\"start\\\": 19,\\r\\n                                                            \\\"end\\\": 35\\r\\n                                                        }\\r\\n                                                    ],\\r\\n                                                    \\\"multiline\\\": true,\\r\\n                                                    \\\"flags\\\": 16384,\\r\\n                                                    \\\"intersects\\\": false,\\r\\n                                                    \\\"transformFlags\\\": 0,\\r\\n                                                    \\\"start\\\": 19,\\r\\n                                                    \\\"end\\\": 35\\r\\n                                                },\\r\\n                                                \\\"flags\\\": 16384,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 17,\\r\\n                                                \\\"end\\\": 39\\r\\n                                            },\\r\\n                                            \\\"decorators\\\": null,\\r\\n                                            \\\"type\\\": null,\\r\\n                                            \\\"accessModifier\\\": null,\\r\\n                                            \\\"typeParameters\\\": null,\\r\\n                                            \\\"flags\\\": 0,\\r\\n                                            \\\"intersects\\\": false,\\r\\n                                            \\\"transformFlags\\\": 2097152,\\r\\n                                            \\\"start\\\": 15,\\r\\n                                            \\\"end\\\": 39\\r\\n                                        }\\r\\n                                    ],\\r\\n                                    \\\"trailingComma\\\": false,\\r\\n                                    \\\"multiline\\\": false,\\r\\n                                    \\\"flags\\\": 16384,\\r\\n                                    \\\"intersects\\\": false,\\r\\n                                    \\\"transformFlags\\\": 0,\\r\\n                                    \\\"start\\\": 9,\\r\\n                                    \\\"end\\\": 39\\r\\n                                },\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 7,\\r\\n                                \\\"end\\\": 41\\r\\n                            },\\r\\n                            \\\"flags\\\": 3,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 0,\\r\\n                            \\\"end\\\": 41\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 0,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 3,\\r\\n                    \\\"end\\\": 41\\r\\n                },\\r\\n                \\\"flags\\\": 0,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 0,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 41\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 41\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 41\\r\\n}\\r\\n```\\r\\n\\r\\n### Printed\\r\\n\\r\\n\\r\\n```javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n```\\r\\n\\r\\n### Diagnostics\\r\\n\\r\\n\\r\\n```javascript\\r\\n\\r\\n```\\r\\n\\r\",\n    \"fileName\": \"__root__\",\n    \"flags\": 0,\n    \"diagnostics\": [\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 5,\n            \"error\": \"Statement expected\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 92,\n            \"end\": 97\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 92,\n            \"end\": 97\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 97,\n            \"end\": 98\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 97,\n            \"end\": 98\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 105,\n            \"end\": 112\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 105,\n            \"end\": 112\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 112,\n            \"end\": 113\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 112,\n            \"end\": 113\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 113,\n            \"end\": 114\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 113,\n            \"end\": 114\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 121,\n            \"end\": 125\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 9235,\n            \"end\": 9240\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 9235,\n            \"end\": 9240\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 9240,\n            \"end\": 9241\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 9240,\n            \"end\": 9241\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 9241,\n            \"end\": 9242\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 9241,\n            \"end\": 9242\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 9301,\n            \"end\": 9306\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 9301,\n            \"end\": 9306\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 9306,\n            \"end\": 9307\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 9306,\n            \"end\": 9307\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 9307,\n            \"end\": 9308\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 9307,\n            \"end\": 9308\n        }\n    ],\n    \"start\": 0,\n    \"end\": 9349\n}\n```\n\n### Printed\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\nvar v = { * foo() {\r\n    yield(foo);\r\n  }\r\n}\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67224232,\r\n                                \"propertyList\": {\r\n                                    \"kind\": 65722,\r\n                                    \"properties\": [\r\n                                        {\r\n                                            \"kind\": 17303650,\r\n                                            \"name\": {\r\n                                                \"kind\": 196711,\r\n                                                \"text\": \"foo\",\r\n                                                \"rawText\": \"foo\",\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 11,\r\n                                                \"end\": 15\r\n                                            },\r\n                                            \"formalParameters\": {\r\n                                                \"kind\": 90,\r\n                                                \"formalParameterList\": [],\r\n                                                \"trailingComma\": false,\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 16,\r\n                                                \"end\": 17\r\n                                            },\r\n                                            \"isSetter\": false,\r\n                                            \"isGetter\": false,\r\n                                            \"contents\": {\r\n                                                \"kind\": 91,\r\n                                                \"functionStatementList\": {\r\n                                                    \"kind\": 94,\r\n                                                    \"statements\": [\r\n                                                        {\r\n                                                            \"kind\": 2097233,\r\n                                                            \"expression\": {\r\n                                                                \"kind\": 65785,\r\n                                                                \"delegate\": false,\r\n                                                                \"expression\": {\r\n                                                                    \"kind\": 66224,\r\n                                                                    \"expression\": {\r\n                                                                        \"kind\": 196712,\r\n                                                                        \"text\": \"foo\",\r\n                                                                        \"rawText\": \"foo\",\r\n                                                                        \"flags\": 0,\r\n                                                                        \"intersects\": false,\r\n                                                                        \"transformFlags\": 0,\r\n                                                                        \"start\": 30,\r\n                                                                        \"end\": 33\r\n                                                                    },\r\n                                                                    \"flags\": 0,\r\n                                                                    \"intersects\": false,\r\n                                                                    \"transformFlags\": 0,\r\n                                                                    \"start\": 29,\r\n                                                                    \"end\": 34\r\n                                                                },\r\n                                                                \"flags\": 0,\r\n                                                                \"intersects\": false,\r\n                                                                \"transformFlags\": 16393,\r\n                                                                \"start\": 19,\r\n                                                                \"end\": 34\r\n                                                            },\r\n                                                            \"flags\": 0,\r\n                                                            \"intersects\": false,\r\n                                                            \"transformFlags\": 0,\r\n                                                            \"start\": 19,\r\n                                                            \"end\": 35\r\n                                                        }\r\n                                                    ],\r\n                                                    \"multiline\": true,\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 19,\r\n                                                    \"end\": 35\r\n                                                },\r\n                                                \"flags\": 16384,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 17,\r\n                                                \"end\": 39\r\n                                            },\r\n                                            \"decorators\": null,\r\n                                            \"type\": null,\r\n                                            \"accessModifier\": null,\r\n                                            \"typeParameters\": null,\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 2097152,\r\n                                            \"start\": 15,\r\n                                            \"end\": 39\r\n                                        }\r\n                                    ],\r\n                                    \"trailingComma\": false,\r\n                                    \"multiline\": false,\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 9,\r\n                                    \"end\": 39\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 41\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 41\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 41\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 41\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 41\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 41\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n\n### Diagnostics\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\nvar v = { * foo() {\r\n    yield(foo);\r\n  }\r\n}\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = { * foo() {\\n    yield(foo);\\n  }\\n}\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67224232,\r\n                                \"propertyList\": {\r\n                                    \"kind\": 65722,\r\n                                    \"properties\": [\r\n                                        {\r\n                                            \"kind\": 17303650,\r\n                                            \"name\": {\r\n                                                \"kind\": 196711,\r\n                                                \"text\": \"foo\",\r\n                                                \"rawText\": \"foo\",\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 11,\r\n                                                \"end\": 15\r\n                                            },\r\n                                            \"formalParameters\": {\r\n                                                \"kind\": 90,\r\n                                                \"formalParameterList\": [],\r\n                                                \"trailingComma\": false,\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 16,\r\n                                                \"end\": 17\r\n                                            },\r\n                                            \"isSetter\": false,\r\n                                            \"isGetter\": false,\r\n                                            \"contents\": {\r\n                                                \"kind\": 91,\r\n                                                \"functionStatementList\": {\r\n                                                    \"kind\": 94,\r\n                                                    \"statements\": [\r\n                                                        {\r\n                                                            \"kind\": 2097233,\r\n                                                            \"expression\": {\r\n                                                                \"kind\": 65785,\r\n                                                                \"delegate\": false,\r\n                                                                \"expression\": {\r\n                                                                    \"kind\": 66224,\r\n                                                                    \"expression\": {\r\n                                                                        \"kind\": 196712,\r\n                                                                        \"text\": \"foo\",\r\n                                                                        \"rawText\": \"foo\",\r\n                                                                        \"flags\": 0,\r\n                                                                        \"intersects\": false,\r\n                                                                        \"transformFlags\": 0,\r\n                                                                        \"start\": 30,\r\n                                                                        \"end\": 33\r\n                                                                    },\r\n                                                                    \"flags\": 0,\r\n                                                                    \"intersects\": false,\r\n                                                                    \"transformFlags\": 0,\r\n                                                                    \"start\": 29,\r\n                                                                    \"end\": 34\r\n                                                                },\r\n                                                                \"flags\": 0,\r\n                                                                \"intersects\": false,\r\n                                                                \"transformFlags\": 16393,\r\n                                                                \"start\": 19,\r\n                                                                \"end\": 34\r\n                                                            },\r\n                                                            \"flags\": 0,\r\n                                                            \"intersects\": false,\r\n                                                            \"transformFlags\": 0,\r\n                                                            \"start\": 19,\r\n                                                            \"end\": 35\r\n                                                        }\r\n                                                    ],\r\n                                                    \"multiline\": true,\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 19,\r\n                                                    \"end\": 35\r\n                                                },\r\n                                                \"flags\": 16384,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 17,\r\n                                                \"end\": 39\r\n                                            },\r\n                                            \"decorators\": null,\r\n                                            \"type\": null,\r\n                                            \"accessModifier\": null,\r\n                                            \"typeParameters\": null,\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 2097152,\r\n                                            \"start\": 15,\r\n                                            \"end\": 39\r\n                                        }\r\n                                    ],\r\n                                    \"trailingComma\": false,\r\n                                    \"multiline\": false,\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 9,\r\n                                    \"end\": 39\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 41\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 41\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 41\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 41\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 41\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 41\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 11,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 16,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 21,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 92,
            "end": 97
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 92,
            "end": 97
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 97,
            "end": 98
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 97,
            "end": 98
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 105,
            "end": 112
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 105,
            "end": 112
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 112,
            "end": 113
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 112,
            "end": 113
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 113,
            "end": 114
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 113,
            "end": 114
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 121,
            "end": 125
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9235,
            "end": 9240
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9235,
            "end": 9240
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9240,
            "end": 9241
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9240,
            "end": 9241
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9241,
            "end": 9242
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9241,
            "end": 9242
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9301,
            "end": 9306
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9301,
            "end": 9306
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9306,
            "end": 9307
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9306,
            "end": 9307
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9307,
            "end": 9308
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9307,
            "end": 9308
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9346,
            "end": 9352
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9346,
            "end": 9352
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9352,
            "end": 9353
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9352,
            "end": 9353
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9360,
            "end": 9363
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9360,
            "end": 9363
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9363,
            "end": 9364
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9363,
            "end": 9364
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9364,
            "end": 9365
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 9364,
            "end": 9365
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 9372,
            "end": 9376
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 38963,
            "end": 38965
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38963,
            "end": 38965
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 38965,
            "end": 38965
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38965,
            "end": 38966
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 38965,
            "end": 38966
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 38966,
            "end": 38967
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 38967,
            "end": 38967
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38967,
            "end": 38968
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 38967,
            "end": 38968
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38972,
            "end": 38974
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 38988,
            "end": 38988
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38988,
            "end": 38989
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 38988,
            "end": 38989
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38988,
            "end": 38989
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38988,
            "end": 38989
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 38988,
            "end": 38989
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 38989,
            "end": 38990
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 38990,
            "end": 38990
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38990,
            "end": 38991
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 38990,
            "end": 38991
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38992,
            "end": 39001
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39007,
            "end": 39007
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39007,
            "end": 39008
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39008,
            "end": 39009
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39009,
            "end": 39009
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39009,
            "end": 39010
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39009,
            "end": 39010
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39011,
            "end": 39014
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39014,
            "end": 39014
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39014,
            "end": 39015
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39015,
            "end": 39016
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39016,
            "end": 39016
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39016,
            "end": 39017
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39016,
            "end": 39017
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39018,
            "end": 39019
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39019,
            "end": 39019
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39019,
            "end": 39020
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39020,
            "end": 39021
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39021,
            "end": 39021
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39021,
            "end": 39022
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39021,
            "end": 39022
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39086,
            "end": 39096
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39086,
            "end": 39096
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39096,
            "end": 39096
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39096,
            "end": 39097
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39096,
            "end": 39097
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39097,
            "end": 39098
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39098,
            "end": 39098
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39098,
            "end": 39099
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39098,
            "end": 39099
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39100,
            "end": 39101
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39101,
            "end": 39101
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39101,
            "end": 39102
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39101,
            "end": 39102
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39102,
            "end": 39103
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39103,
            "end": 39103
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39103,
            "end": 39104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39103,
            "end": 39104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 39105,
            "end": 39109
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 39105,
            "end": 39110
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 39105,
            "end": 39110
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 48998,
            "end": 48999
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 48998,
            "end": 48999
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 49023,
            "end": 49024
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 49023,
            "end": 49024
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 49045,
            "end": 49046
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 49045,
            "end": 49046
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55078,
            "end": 55079
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 55078,
            "end": 55079
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55092,
            "end": 55093
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 55092,
            "end": 55093
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 55098,
            "end": 55100
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55122,
            "end": 55132
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55138,
            "end": 55143
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 55138,
            "end": 55143
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55143,
            "end": 55148
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 55143,
            "end": 55148
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55148,
            "end": 55149
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 55148,
            "end": 55149
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55219,
            "end": 55224
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 55219,
            "end": 55224
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55224,
            "end": 55225
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 55224,
            "end": 55225
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55232,
            "end": 55239
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 55232,
            "end": 55239
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55239,
            "end": 55240
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 55239,
            "end": 55240
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55240,
            "end": 55241
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 55240,
            "end": 55241
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 55248,
            "end": 55252
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64362,
            "end": 64367
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64362,
            "end": 64367
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64367,
            "end": 64368
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64367,
            "end": 64368
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64368,
            "end": 64369
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64368,
            "end": 64369
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64428,
            "end": 64433
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64428,
            "end": 64433
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64433,
            "end": 64434
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64433,
            "end": 64434
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64434,
            "end": 64435
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64434,
            "end": 64435
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64502,
            "end": 64512
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64518,
            "end": 64523
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 64518,
            "end": 64523
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64523,
            "end": 64528
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64523,
            "end": 64528
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64528,
            "end": 64529
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64528,
            "end": 64529
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64599,
            "end": 64604
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64599,
            "end": 64604
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64604,
            "end": 64605
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64604,
            "end": 64605
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64612,
            "end": 64619
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64612,
            "end": 64619
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64619,
            "end": 64620
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64619,
            "end": 64620
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64620,
            "end": 64621
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 64620,
            "end": 64621
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 64628,
            "end": 64632
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 73742,
            "end": 73747
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 73742,
            "end": 73747
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 73747,
            "end": 73748
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 73747,
            "end": 73748
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 73748,
            "end": 73749
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 73748,
            "end": 73749
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 73808,
            "end": 73813
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 73808,
            "end": 73813
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 73813,
            "end": 73814
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 73813,
            "end": 73814
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 73814,
            "end": 73815
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 73814,
            "end": 73815
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 73859,
            "end": 73861
        }
    ],
    "start": 0,
    "end": 73861
}
```

### Printed

```javascript
 test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
var v = { * foo() {@{xd}@
    yield(foo);@{xd}@
  }@{xd}@
}@{xd}@
`````@{xd}@
@{xd}@
## Output@{xd}@
@{xd}@
@{xd}@
### Hybrid CST@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
{@{xd}@
    "kind": 196,@{xd}@
    "source": "var v = { * foo() {\n    yield(foo);\n  }\n}",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 2097397,@{xd}@
                "declarationList": {@{xd}@
                    "kind": 244,@{xd}@
                    "declarations": [@{xd}@
                        {@{xd}@
                            "kind": 243,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "v",@{xd}@
                                "rawText": "v",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 3,@{xd}@
                                "end": 5@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": null,@{xd}@
                            "initializer": {@{xd}@
                                "kind": 67224232,@{xd}@
                                "propertyList": {@{xd}@
                                    "kind": 65722,@{xd}@
                                    "properties": [@{xd}@
                                        {@{xd}@
                                            "kind": 17303650,@{xd}@
                                            "name": {@{xd}@
                                                "kind": 196711,@{xd}@
                                                "text": "foo",@{xd}@
                                                "rawText": "foo",@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 11,@{xd}@
                                                "end": 15@{xd}@
                                            },@{xd}@
                                            "formalParameters": {@{xd}@
                                                "kind": 90,@{xd}@
                                                "formalParameterList": [],@{xd}@
                                                "trailingComma": false,@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 16,@{xd}@
                                                "end": 17@{xd}@
                                            },@{xd}@
                                            "isSetter": false,@{xd}@
                                            "isGetter": false,@{xd}@
                                            "contents": {@{xd}@
                                                "kind": 91,@{xd}@
                                                "functionStatementList": {@{xd}@
                                                    "kind": 94,@{xd}@
                                                    "statements": [@{xd}@
                                                        {@{xd}@
                                                            "kind": 2097233,@{xd}@
                                                            "expression": {@{xd}@
                                                                "kind": 65785,@{xd}@
                                                                "delegate": false,@{xd}@
                                                                "expression": {@{xd}@
                                                                    "kind": 66224,@{xd}@
                                                                    "expression": {@{xd}@
                                                                        "kind": 196712,@{xd}@
                                                                        "text": "foo",@{xd}@
                                                                        "rawText": "foo",@{xd}@
                                                                        "flags": 0,@{xd}@
                                                                        "intersects": false,@{xd}@
                                                                        "transformFlags": 0,@{xd}@
                                                                        "start": 30,@{xd}@
                                                                        "end": 33@{xd}@
                                                                    },@{xd}@
                                                                    "flags": 0,@{xd}@
                                                                    "intersects": false,@{xd}@
                                                                    "transformFlags": 0,@{xd}@
                                                                    "start": 29,@{xd}@
                                                                    "end": 34@{xd}@
                                                                },@{xd}@
                                                                "flags": 0,@{xd}@
                                                                "intersects": false,@{xd}@
                                                                "transformFlags": 16393,@{xd}@
                                                                "start": 19,@{xd}@
                                                                "end": 34@{xd}@
                                                            },@{xd}@
                                                            "flags": 0,@{xd}@
                                                            "intersects": false,@{xd}@
                                                            "transformFlags": 0,@{xd}@
                                                            "start": 19,@{xd}@
                                                            "end": 35@{xd}@
                                                        }@{xd}@
                                                    ],@{xd}@
                                                    "multiline": true,@{xd}@
                                                    "flags": 16384,@{xd}@
                                                    "intersects": false,@{xd}@
                                                    "transformFlags": 0,@{xd}@
                                                    "start": 19,@{xd}@
                                                    "end": 35@{xd}@
                                                },@{xd}@
                                                "flags": 16384,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 17,@{xd}@
                                                "end": 39@{xd}@
                                            },@{xd}@
                                            "decorators": null,@{xd}@
                                            "type": null,@{xd}@
                                            "accessModifier": null,@{xd}@
                                            "typeParameters": null,@{xd}@
                                            "flags": 0,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 2097152,@{xd}@
                                            "start": 15,@{xd}@
                                            "end": 39@{xd}@
                                        }@{xd}@
                                    ],@{xd}@
                                    "trailingComma": false,@{xd}@
                                    "multiline": false,@{xd}@
                                    "flags": 16384,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 9,@{xd}@
                                    "end": 39@{xd}@
                                },@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 7,@{xd}@
                                "end": 41@{xd}@
                            },@{xd}@
                            "flags": 3,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 0,@{xd}@
                            "end": 41@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 3,@{xd}@
                    "end": 41@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 0,@{xd}@
                "end": 41@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 41@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 41@{xd}@
}@{xd}@
```@{xd}@
@{xd}@
### Printed@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{x2716}@ Soon to be open sourced@{xd}@
```@{xd}@
@{xd}@
### Diagnostics@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{xd}@
```@{xd}@
@{xd}@
```

### Diagnostics

```javascript
 test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
var v = { * foo() {@{xd}@
    yield(foo);@{xd}@
  }@{xd}@
}@{xd}@
`````@{xd}@
@{xd}@
## Output@{xd}@
@{xd}@
@{xd}@
### Hybrid CST@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
{@{xd}@
    "kind": 196,@{xd}@
    "source": "var v = { * foo() {\n    yield(foo);\n  }\n}",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 2097397,@{xd}@
                "declarationList": {@{xd}@
                    "kind": 244,@{xd}@
                    "declarations": [@{xd}@
                        {@{xd}@
                            "kind": 243,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "v",@{xd}@
                                "rawText": "v",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 3,@{xd}@
                                "end": 5@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": null,@{xd}@
                            "initializer": {@{xd}@
                                "kind": 67224232,@{xd}@
                                "propertyList": {@{xd}@
                                    "kind": 65722,@{xd}@
                                    "properties": [@{xd}@
                                        {@{xd}@
                                            "kind": 17303650,@{xd}@
                                            "name": {@{xd}@
                                                "kind": 196711,@{xd}@
                                                "text": "foo",@{xd}@
                                                "rawText": "foo",@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 11,@{xd}@
                                                "end": 15@{xd}@
                                            },@{xd}@
                                            "formalParameters": {@{xd}@
                                                "kind": 90,@{xd}@
                                                "formalParameterList": [],@{xd}@
                                                "trailingComma": false,@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 16,@{xd}@
                                                "end": 17@{xd}@
                                            },@{xd}@
                                            "isSetter": false,@{xd}@
                                            "isGetter": false,@{xd}@
                                            "contents": {@{xd}@
                                                "kind": 91,@{xd}@
                                                "functionStatementList": {@{xd}@
                                                    "kind": 94,@{xd}@
                                                    "statements": [@{xd}@
                                                        {@{xd}@
                                                            "kind": 2097233,@{xd}@
                                                            "expression": {@{xd}@
                                                                "kind": 65785,@{xd}@
                                                                "delegate": false,@{xd}@
                                                                "expression": {@{xd}@
                                                                    "kind": 66224,@{xd}@
                                                                    "expression": {@{xd}@
                                                                        "kind": 196712,@{xd}@
                                                                        "text": "foo",@{xd}@
                                                                        "rawText": "foo",@{xd}@
                                                                        "flags": 0,@{xd}@
                                                                        "intersects": false,@{xd}@
                                                                        "transformFlags": 0,@{xd}@
                                                                        "start": 30,@{xd}@
                                                                        "end": 33@{xd}@
                                                                    },@{xd}@
                                                                    "flags": 0,@{xd}@
                                                                    "intersects": false,@{xd}@
                                                                    "transformFlags": 0,@{xd}@
                                                                    "start": 29,@{xd}@
                                                                    "end": 34@{xd}@
                                                                },@{xd}@
                                                                "flags": 0,@{xd}@
                                                                "intersects": false,@{xd}@
                                                                "transformFlags": 16393,@{xd}@
                                                                "start": 19,@{xd}@
                                                                "end": 34@{xd}@
                                                            },@{xd}@
                                                            "flags": 0,@{xd}@
                                                            "intersects": false,@{xd}@
                                                            "transformFlags": 0,@{xd}@
                                                            "start": 19,@{xd}@
                                                            "end": 35@{xd}@
                                                        }@{xd}@
                                                    ],@{xd}@
                                                    "multiline": true,@{xd}@
                                                    "flags": 16384,@{xd}@
                                                    "intersects": false,@{xd}@
                                                    "transformFlags": 0,@{xd}@
                                                    "start": 19,@{xd}@
                                                    "end": 35@{xd}@
                                                },@{xd}@
                                                "flags": 16384,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 17,@{xd}@
                                                "end": 39@{xd}@
                                            },@{xd}@
                                            "decorators": null,@{xd}@
                                            "type": null,@{xd}@
                                            "accessModifier": null,@{xd}@
                                            "typeParameters": null,@{xd}@
                                            "flags": 0,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 2097152,@{xd}@
                                            "start": 15,@{xd}@
                                            "end": 39@{xd}@
                                        }@{xd}@
                                    ],@{xd}@
                                    "trailingComma": false,@{xd}@
                                    "multiline": false,@{xd}@
                                    "flags": 16384,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 9,@{xd}@
                                    "end": 39@{xd}@
                                },@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 7,@{xd}@
                                "end": 41@{xd}@
                            },@{xd}@
                            "flags": 3,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 0,@{xd}@
                            "end": 41@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 3,@{xd}@
                    "end": 41@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 0,@{xd}@
                "end": 41@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 41@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 41@{xd}@
}@{xd}@
```@{xd}@
@{xd}@
### Printed@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{x2716}@ Soon to be open sourced@{xd}@
```@{xd}@
@{xd}@
### Diagnostics@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{xd}@
```@{xd}@
@{xd}@
```

