# Kataw parser test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
var v = () => {@{xd}@
     yield foo@{xd}@
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
    "source": "var v = () => {\n     yield foo\n  }",@{xd}@
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
                                "kind": 67592,@{xd}@
                                "typeParameters": null,@{xd}@
                                "arrowParameters": {@{xd}@
                                    "kind": 65545,@{xd}@
                                    "elements": [],@{xd}@
                                    "type": null,@{xd}@
                                    "accessModifier": null,@{xd}@
                                    "trailingComma": false,@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 7,@{xd}@
                                    "end": 7@{xd}@
                                },@{xd}@
                                "contents": {@{xd}@
                                    "kind": 91,@{xd}@
                                    "functionStatementList": {@{xd}@
                                        "kind": 94,@{xd}@
                                        "statements": [@{xd}@
                                            {@{xd}@
                                                "kind": 2097233,@{xd}@
                                                "expression": {@{xd}@
                                                    "kind": 196712,@{xd}@
                                                    "text": "yield",@{xd}@
                                                    "rawText": "yield",@{xd}@
                                                    "flags": 16384,@{xd}@
                                                    "intersects": false,@{xd}@
                                                    "transformFlags": 0,@{xd}@
                                                    "start": 15,@{xd}@
                                                    "end": 26@{xd}@
                                                },@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 15,@{xd}@
                                                "end": 26@{xd}@
                                            },@{xd}@
                                            {@{xd}@
                                                "kind": 2097233,@{xd}@
                                                "expression": {@{xd}@
                                                    "kind": 196712,@{xd}@
                                                    "text": "foo",@{xd}@
                                                    "rawText": "foo",@{xd}@
                                                    "flags": 2,@{xd}@
                                                    "intersects": false,@{xd}@
                                                    "transformFlags": 0,@{xd}@
                                                    "start": 26,@{xd}@
                                                    "end": 30@{xd}@
                                                },@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 26,@{xd}@
                                                "end": 30@{xd}@
                                            }@{xd}@
                                        ],@{xd}@
                                        "multiline": true,@{xd}@
                                        "flags": 16384,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 0,@{xd}@
                                        "start": 15,@{xd}@
                                        "end": 30@{xd}@
                                    },@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 13,@{xd}@
                                    "end": 34@{xd}@
                                },@{xd}@
                                "flags": 536870912,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 7,@{xd}@
                                "end": 34@{xd}@
                            },@{xd}@
                            "flags": 3,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 0,@{xd}@
                            "end": 34@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 3,@{xd}@
                    "end": 34@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 0,@{xd}@
                "end": 34@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 34@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [@{xd}@
        {@{xd}@
            "kind": 2,@{xd}@
            "source": 2,@{xd}@
            "message": "';' expected.",@{xd}@
            "start": 27,@{xd}@
            "length": 0@{xd}@
        }@{xd}@
    ],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 34@{xd}@
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
                            "text": "js\rvar v = () => {\r     yield foo\r  }\r",
                            "rawText": "js\r\nvar v = () => {\r\n     yield foo\r\n  }\r\n",
                            "flags": 768,
                            "start": 36,
                            "end": 80
                        },
                        "flags": 256,
                        "start": 22,
                        "end": 80
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 80,
                        "end": 82
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 82
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 82,
                    "end": 84
                },
                "flags": 256,
                "start": 22,
                "end": 84
            },
            "flags": 128,
            "start": 22,
            "end": 84
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 90,
                "end": 97
            },
            "flags": 128,
            "start": 90,
            "end": 97
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 106,
                "end": 113
            },
            "flags": 128,
            "start": 106,
            "end": 113
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
                            "start": 113,
                            "end": 117
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 117,
                            "end": 125
                        },
                        "flags": 256,
                        "start": 113,
                        "end": 125
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"var v = () => {\n     yield foo\n  }\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 2097397,\r                \"declarationList\": {\r                    \"kind\": 244,\r                    \"declarations\": [\r                        {\r                            \"kind\": 243,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"v\",\r                                \"rawText\": \"v\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": {\r                                \"kind\": 67592,\r                                \"typeParameters\": null,\r                                \"arrowParameters\": {\r                                    \"kind\": 65545,\r                                    \"elements\": [],\r                                    \"type\": null,\r                                    \"accessModifier\": null,\r                                    \"trailingComma\": false,\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 7,\r                                    \"end\": 7\r                                },\r                                \"contents\": {\r                                    \"kind\": 91,\r                                    \"functionStatementList\": {\r                                        \"kind\": 94,\r                                        \"statements\": [\r                                            {\r                                                \"kind\": 2097233,\r                                                \"expression\": {\r                                                    \"kind\": 196712,\r                                                    \"text\": \"yield\",\r                                                    \"rawText\": \"yield\",\r                                                    \"flags\": 16384,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 15,\r                                                    \"end\": 26\r                                                },\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 15,\r                                                \"end\": 26\r                                            },\r                                            {\r                                                \"kind\": 2097233,\r                                                \"expression\": {\r                                                    \"kind\": 196712,\r                                                    \"text\": \"foo\",\r                                                    \"rawText\": \"foo\",\r                                                    \"flags\": 2,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 26,\r                                                    \"end\": 30\r                                                },\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 26,\r                                                \"end\": 30\r                                            }\r                                        ],\r                                        \"multiline\": true,\r                                        \"flags\": 16384,\r                                        \"intersects\": false,\r                                        \"transformFlags\": 0,\r                                        \"start\": 15,\r                                        \"end\": 30\r                                    },\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 13,\r                                    \"end\": 34\r                                },\r                                \"flags\": 536870912,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 7,\r                                \"end\": 34\r                            },\r                            \"flags\": 3,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 0,\r                            \"end\": 34\r                        }\r                    ],\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 34\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 0,\r                \"end\": 34\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 34\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [\r        {\r            \"kind\": 2,\r            \"source\": 2,\r            \"message\": \"';' expected.\",\r            \"start\": 27,\r            \"length\": 0\r        }\r    ],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 34\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = () => {\\n     yield foo\\n  }\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67592,\r\n                                \"typeParameters\": null,\r\n                                \"arrowParameters\": {\r\n                                    \"kind\": 65545,\r\n                                    \"elements\": [],\r\n                                    \"type\": null,\r\n                                    \"accessModifier\": null,\r\n                                    \"trailingComma\": false,\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 7,\r\n                                    \"end\": 7\r\n                                },\r\n                                \"contents\": {\r\n                                    \"kind\": 91,\r\n                                    \"functionStatementList\": {\r\n                                        \"kind\": 94,\r\n                                        \"statements\": [\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"yield\",\r\n                                                    \"rawText\": \"yield\",\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 15,\r\n                                                    \"end\": 26\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 15,\r\n                                                \"end\": 26\r\n                                            },\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"foo\",\r\n                                                    \"rawText\": \"foo\",\r\n                                                    \"flags\": 2,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 26,\r\n                                                    \"end\": 30\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 26,\r\n                                                \"end\": 30\r\n                                            }\r\n                                        ],\r\n                                        \"multiline\": true,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 0,\r\n                                        \"start\": 15,\r\n                                        \"end\": 30\r\n                                    },\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 34\r\n                                },\r\n                                \"flags\": 536870912,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 34\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 34\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 34\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 34\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [\r\n        {\r\n            \"kind\": 2,\r\n            \"source\": 2,\r\n            \"message\": \"';' expected.\",\r\n            \"start\": 27,\r\n            \"length\": 0\r\n        }\r\n    ],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 34\r\n}\r\n",
                        "flags": 768,
                        "start": 125,
                        "end": 6611
                    },
                    "flags": 256,
                    "start": 113,
                    "end": 6611
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 6611,
                    "end": 6613
                },
                "flags": 256,
                "start": 113,
                "end": 6613
            },
            "flags": 128,
            "start": 113,
            "end": 6613
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
                            "start": 6620,
                            "end": 6628
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 6628,
                            "end": 6636
                        },
                        "flags": 256,
                        "start": 6620,
                        "end": 6636
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 6636,
                        "end": 6677
                    },
                    "flags": 256,
                    "start": 6620,
                    "end": 6677
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 6677,
                    "end": 6679
                },
                "flags": 256,
                "start": 6620,
                "end": 6679
            },
            "flags": 128,
            "start": 6620,
            "end": 6679
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
                            "start": 6686,
                            "end": 6698
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 6698,
                            "end": 6706
                        },
                        "flags": 256,
                        "start": 6686,
                        "end": 6706
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r\r",
                        "rawText": "javascript\r\n\r\n",
                        "flags": 768,
                        "start": 6706,
                        "end": 6722
                    },
                    "flags": 256,
                    "start": 6686,
                    "end": 6722
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 6722,
                    "end": 6724
                },
                "flags": 256,
                "start": 6686,
                "end": 6724
            },
            "flags": 128,
            "start": 6686,
            "end": 6724
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 6731,
                "end": 6738
            },
            "flags": 128,
            "start": 6731,
            "end": 6738
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 6743,
                "end": 6750
            },
            "flags": 128,
            "start": 6743,
            "end": 6750
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
                                "start": 6750,
                                "end": 6754
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 6754,
                                "end": 6758
                            },
                            "flags": 256,
                            "start": 6750,
                            "end": 6758
                        },
                        "template": {
                            "kind": 458761,
                            "text": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\rvar v = () => {\r     yield foo\r  }\r\",\n                            \"rawText\": \"js\r\nvar v = () => {\r\n     yield foo\r\n  }\r\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 80\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 80\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 80,\n                        \"end\": 82\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 82\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 82,\n                    \"end\": 84\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 84\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 84\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 90,\n                \"end\": 97\n            },\n            \"flags\": 128,\n            \"start\": 90,\n            \"end\": 97\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 106,\n                \"end\": 113\n            },\n            \"flags\": 128,\n            \"start\": 106,\n            \"end\": 113\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 113,\n                            \"end\": 117\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 117,\n                            \"end\": 125\n                        },\n                        \"flags\": 256,\n                        \"start\": 113,\n                        \"end\": 125\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r{\r    \"kind\": 196,\r    \"source\": \"var v = () => {\n     yield foo\n  }\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 2097397,\r                \"declarationList\": {\r                    \"kind\": 244,\r                    \"declarations\": [\r                        {\r                            \"kind\": 243,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"v\",\r                                \"rawText\": \"v\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": {\r                                \"kind\": 67592,\r                                \"typeParameters\": null,\r                                \"arrowParameters\": {\r                                    \"kind\": 65545,\r                                    \"elements\": [],\r                                    \"type\": null,\r                                    \"accessModifier\": null,\r                                    \"trailingComma\": false,\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 7,\r                                    \"end\": 7\r                                },\r                                \"contents\": {\r                                    \"kind\": 91,\r                                    \"functionStatementList\": {\r                                        \"kind\": 94,\r                                        \"statements\": [\r                                            {\r                                                \"kind\": 2097233,\r                                                \"expression\": {\r                                                    \"kind\": 196712,\r                                                    \"text\": \"yield\",\r                                                    \"rawText\": \"yield\",\r                                                    \"flags\": 16384,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 15,\r                                                    \"end\": 26\r                                                },\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 15,\r                                                \"end\": 26\r                                            },\r                                            {\r                                                \"kind\": 2097233,\r                                                \"expression\": {\r                                                    \"kind\": 196712,\r                                                    \"text\": \"foo\",\r                                                    \"rawText\": \"foo\",\r                                                    \"flags\": 2,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 26,\r                                                    \"end\": 30\r                                                },\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 26,\r                                                \"end\": 30\r                                            }\r                                        ],\r                                        \"multiline\": true,\r                                        \"flags\": 16384,\r                                        \"intersects\": false,\r                                        \"transformFlags\": 0,\r                                        \"start\": 15,\r                                        \"end\": 30\r                                    },\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 13,\r                                    \"end\": 34\r                                },\r                                \"flags\": 536870912,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 7,\r                                \"end\": 34\r                            },\r                            \"flags\": 3,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 0,\r                            \"end\": 34\r                        }\r                    ],\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 34\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 0,\r                \"end\": 34\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 34\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [\r        {\r            \"kind\": 2,\r            \"source\": 2,\r            \"message\": \"';' expected.\",\r            \"start\": 27,\r            \"length\": 0\r        }\r    ],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 34\r}\r\",\n                        \"rawText\": \"javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = () => {\\n     yield foo\\n  }\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67592,\r\n                                \"typeParameters\": null,\r\n                                \"arrowParameters\": {\r\n                                    \"kind\": 65545,\r\n                                    \"elements\": [],\r\n                                    \"type\": null,\r\n                                    \"accessModifier\": null,\r\n                                    \"trailingComma\": false,\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 7,\r\n                                    \"end\": 7\r\n                                },\r\n                                \"contents\": {\r\n                                    \"kind\": 91,\r\n                                    \"functionStatementList\": {\r\n                                        \"kind\": 94,\r\n                                        \"statements\": [\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"yield\",\r\n                                                    \"rawText\": \"yield\",\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 15,\r\n                                                    \"end\": 26\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 15,\r\n                                                \"end\": 26\r\n                                            },\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"foo\",\r\n                                                    \"rawText\": \"foo\",\r\n                                                    \"flags\": 2,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 26,\r\n                                                    \"end\": 30\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 26,\r\n                                                \"end\": 30\r\n                                            }\r\n                                        ],\r\n                                        \"multiline\": true,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 0,\r\n                                        \"start\": 15,\r\n                                        \"end\": 30\r\n                                    },\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 34\r\n                                },\r\n                                \"flags\": 536870912,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 34\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 34\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 34\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 34\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [\r\n        {\r\n            \"kind\": 2,\r\n            \"source\": 2,\r\n            \"message\": \"';' expected.\",\r\n            \"start\": 27,\r\n            \"length\": 0\r\n        }\r\n    ],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 34\r\n}\r\n\",\n                        \"flags\": 768,\n                        \"start\": 125,\n                        \"end\": 6611\n                    },\n                    \"flags\": 256,\n                    \"start\": 113,\n                    \"end\": 6611\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 6611,\n                    \"end\": 6613\n                },\n                \"flags\": 256,\n                \"start\": 113,\n                \"end\": 6613\n            },\n            \"flags\": 128,\n            \"start\": 113,\n            \"end\": 6613\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 6620,\n                            \"end\": 6628\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 6628,\n                            \"end\": 6636\n                        },\n                        \"flags\": 256,\n                        \"start\": 6620,\n                        \"end\": 6636\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r@{x2716}@ Soon to be open sourced\r\",\n                        \"rawText\": \"javascript\r\n@{x2716}@ Soon to be open sourced\r\n\",\n                        \"flags\": 768,\n                        \"start\": 6636,\n                        \"end\": 6677\n                    },\n                    \"flags\": 256,\n                    \"start\": 6620,\n                    \"end\": 6677\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 6677,\n                    \"end\": 6679\n                },\n                \"flags\": 256,\n                \"start\": 6620,\n                \"end\": 6679\n            },\n            \"flags\": 128,\n            \"start\": 6620,\n            \"end\": 6679\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 6686,\n                            \"end\": 6698\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 6698,\n                            \"end\": 6706\n                        },\n                        \"flags\": 256,\n                        \"start\": 6686,\n                        \"end\": 6706\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r\r\",\n                        \"rawText\": \"javascript\r\n\r\n\",\n                        \"flags\": 768,\n                        \"start\": 6706,\n                        \"end\": 6722\n                    },\n                    \"flags\": 256,\n                    \"start\": 6686,\n                    \"end\": 6722\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 6722,\n                    \"end\": 6724\n                },\n                \"flags\": 256,\n                \"start\": 6686,\n                \"end\": 6724\n            },\n            \"flags\": 128,\n            \"start\": 6686,\n            \"end\": 6724\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\r\n\r\n## Input\r\n\r\n",
                            "rawText": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\rvar v = () => {\\r     yield foo\\r  }\\r\",\n                            \"rawText\": \"js\\r\\nvar v = () => {\\r\\n     yield foo\\r\\n  }\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 80\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 80\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 80,\n                        \"end\": 82\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 82\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 82,\n                    \"end\": 84\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 84\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 84\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 90,\n                \"end\": 97\n            },\n            \"flags\": 128,\n            \"start\": 90,\n            \"end\": 97\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 106,\n                \"end\": 113\n            },\n            \"flags\": 128,\n            \"start\": 106,\n            \"end\": 113\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 113,\n                            \"end\": 117\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 117,\n                            \"end\": 125\n                        },\n                        \"flags\": 256,\n                        \"start\": 113,\n                        \"end\": 125\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\"var v = () => {\\n     yield foo\\n  }\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 2097397,\\r                \\\"declarationList\\\": {\\r                    \\\"kind\\\": 244,\\r                    \\\"declarations\\\": [\\r                        {\\r                            \\\"kind\\\": 243,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"v\\\",\\r                                \\\"rawText\\\": \\\"v\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 3,\\r                                \\\"end\\\": 5\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": null,\\r                            \\\"initializer\\\": {\\r                                \\\"kind\\\": 67592,\\r                                \\\"typeParameters\\\": null,\\r                                \\\"arrowParameters\\\": {\\r                                    \\\"kind\\\": 65545,\\r                                    \\\"elements\\\": [],\\r                                    \\\"type\\\": null,\\r                                    \\\"accessModifier\\\": null,\\r                                    \\\"trailingComma\\\": false,\\r                                    \\\"flags\\\": 0,\\r                                    \\\"intersects\\\": false,\\r                                    \\\"transformFlags\\\": 0,\\r                                    \\\"start\\\": 7,\\r                                    \\\"end\\\": 7\\r                                },\\r                                \\\"contents\\\": {\\r                                    \\\"kind\\\": 91,\\r                                    \\\"functionStatementList\\\": {\\r                                        \\\"kind\\\": 94,\\r                                        \\\"statements\\\": [\\r                                            {\\r                                                \\\"kind\\\": 2097233,\\r                                                \\\"expression\\\": {\\r                                                    \\\"kind\\\": 196712,\\r                                                    \\\"text\\\": \\\"yield\\\",\\r                                                    \\\"rawText\\\": \\\"yield\\\",\\r                                                    \\\"flags\\\": 16384,\\r                                                    \\\"intersects\\\": false,\\r                                                    \\\"transformFlags\\\": 0,\\r                                                    \\\"start\\\": 15,\\r                                                    \\\"end\\\": 26\\r                                                },\\r                                                \\\"flags\\\": 0,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 15,\\r                                                \\\"end\\\": 26\\r                                            },\\r                                            {\\r                                                \\\"kind\\\": 2097233,\\r                                                \\\"expression\\\": {\\r                                                    \\\"kind\\\": 196712,\\r                                                    \\\"text\\\": \\\"foo\\\",\\r                                                    \\\"rawText\\\": \\\"foo\\\",\\r                                                    \\\"flags\\\": 2,\\r                                                    \\\"intersects\\\": false,\\r                                                    \\\"transformFlags\\\": 0,\\r                                                    \\\"start\\\": 26,\\r                                                    \\\"end\\\": 30\\r                                                },\\r                                                \\\"flags\\\": 0,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 26,\\r                                                \\\"end\\\": 30\\r                                            }\\r                                        ],\\r                                        \\\"multiline\\\": true,\\r                                        \\\"flags\\\": 16384,\\r                                        \\\"intersects\\\": false,\\r                                        \\\"transformFlags\\\": 0,\\r                                        \\\"start\\\": 15,\\r                                        \\\"end\\\": 30\\r                                    },\\r                                    \\\"flags\\\": 0,\\r                                    \\\"intersects\\\": false,\\r                                    \\\"transformFlags\\\": 0,\\r                                    \\\"start\\\": 13,\\r                                    \\\"end\\\": 34\\r                                },\\r                                \\\"flags\\\": 536870912,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 0,\\r                                \\\"start\\\": 7,\\r                                \\\"end\\\": 34\\r                            },\\r                            \\\"flags\\\": 3,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 0,\\r                            \\\"end\\\": 34\\r                        }\\r                    ],\\r                    \\\"flags\\\": 0,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 3,\\r                    \\\"end\\\": 34\\r                },\\r                \\\"flags\\\": 0,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 0,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 34\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 34\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [\\r        {\\r            \\\"kind\\\": 2,\\r            \\\"source\\\": 2,\\r            \\\"message\\\": \\\"';' expected.\\\",\\r            \\\"start\\\": 27,\\r            \\\"length\\\": 0\\r        }\\r    ],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 34\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"var v = () => {\\\\n     yield foo\\\\n  }\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 2097397,\\r\\n                \\\"declarationList\\\": {\\r\\n                    \\\"kind\\\": 244,\\r\\n                    \\\"declarations\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 243,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"v\\\",\\r\\n                                \\\"rawText\\\": \\\"v\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 3,\\r\\n                                \\\"end\\\": 5\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": null,\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 67592,\\r\\n                                \\\"typeParameters\\\": null,\\r\\n                                \\\"arrowParameters\\\": {\\r\\n                                    \\\"kind\\\": 65545,\\r\\n                                    \\\"elements\\\": [],\\r\\n                                    \\\"type\\\": null,\\r\\n                                    \\\"accessModifier\\\": null,\\r\\n                                    \\\"trailingComma\\\": false,\\r\\n                                    \\\"flags\\\": 0,\\r\\n                                    \\\"intersects\\\": false,\\r\\n                                    \\\"transformFlags\\\": 0,\\r\\n                                    \\\"start\\\": 7,\\r\\n                                    \\\"end\\\": 7\\r\\n                                },\\r\\n                                \\\"contents\\\": {\\r\\n                                    \\\"kind\\\": 91,\\r\\n                                    \\\"functionStatementList\\\": {\\r\\n                                        \\\"kind\\\": 94,\\r\\n                                        \\\"statements\\\": [\\r\\n                                            {\\r\\n                                                \\\"kind\\\": 2097233,\\r\\n                                                \\\"expression\\\": {\\r\\n                                                    \\\"kind\\\": 196712,\\r\\n                                                    \\\"text\\\": \\\"yield\\\",\\r\\n                                                    \\\"rawText\\\": \\\"yield\\\",\\r\\n                                                    \\\"flags\\\": 16384,\\r\\n                                                    \\\"intersects\\\": false,\\r\\n                                                    \\\"transformFlags\\\": 0,\\r\\n                                                    \\\"start\\\": 15,\\r\\n                                                    \\\"end\\\": 26\\r\\n                                                },\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 15,\\r\\n                                                \\\"end\\\": 26\\r\\n                                            },\\r\\n                                            {\\r\\n                                                \\\"kind\\\": 2097233,\\r\\n                                                \\\"expression\\\": {\\r\\n                                                    \\\"kind\\\": 196712,\\r\\n                                                    \\\"text\\\": \\\"foo\\\",\\r\\n                                                    \\\"rawText\\\": \\\"foo\\\",\\r\\n                                                    \\\"flags\\\": 2,\\r\\n                                                    \\\"intersects\\\": false,\\r\\n                                                    \\\"transformFlags\\\": 0,\\r\\n                                                    \\\"start\\\": 26,\\r\\n                                                    \\\"end\\\": 30\\r\\n                                                },\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 26,\\r\\n                                                \\\"end\\\": 30\\r\\n                                            }\\r\\n                                        ],\\r\\n                                        \\\"multiline\\\": true,\\r\\n                                        \\\"flags\\\": 16384,\\r\\n                                        \\\"intersects\\\": false,\\r\\n                                        \\\"transformFlags\\\": 0,\\r\\n                                        \\\"start\\\": 15,\\r\\n                                        \\\"end\\\": 30\\r\\n                                    },\\r\\n                                    \\\"flags\\\": 0,\\r\\n                                    \\\"intersects\\\": false,\\r\\n                                    \\\"transformFlags\\\": 0,\\r\\n                                    \\\"start\\\": 13,\\r\\n                                    \\\"end\\\": 34\\r\\n                                },\\r\\n                                \\\"flags\\\": 536870912,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 7,\\r\\n                                \\\"end\\\": 34\\r\\n                            },\\r\\n                            \\\"flags\\\": 3,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 0,\\r\\n                            \\\"end\\\": 34\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 0,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 3,\\r\\n                    \\\"end\\\": 34\\r\\n                },\\r\\n                \\\"flags\\\": 0,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 0,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 34\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 34\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [\\r\\n        {\\r\\n            \\\"kind\\\": 2,\\r\\n            \\\"source\\\": 2,\\r\\n            \\\"message\\\": \\\"';' expected.\\\",\\r\\n            \\\"start\\\": 27,\\r\\n            \\\"length\\\": 0\\r\\n        }\\r\\n    ],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 34\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 125,\n                        \"end\": 6611\n                    },\n                    \"flags\": 256,\n                    \"start\": 113,\n                    \"end\": 6611\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 6611,\n                    \"end\": 6613\n                },\n                \"flags\": 256,\n                \"start\": 113,\n                \"end\": 6613\n            },\n            \"flags\": 128,\n            \"start\": 113,\n            \"end\": 6613\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 6620,\n                            \"end\": 6628\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 6628,\n                            \"end\": 6636\n                        },\n                        \"flags\": 256,\n                        \"start\": 6620,\n                        \"end\": 6636\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 6636,\n                        \"end\": 6677\n                    },\n                    \"flags\": 256,\n                    \"start\": 6620,\n                    \"end\": 6677\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 6677,\n                    \"end\": 6679\n                },\n                \"flags\": 256,\n                \"start\": 6620,\n                \"end\": 6679\n            },\n            \"flags\": 128,\n            \"start\": 6620,\n            \"end\": 6679\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 6686,\n                            \"end\": 6698\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 6698,\n                            \"end\": 6706\n                        },\n                        \"flags\": 256,\n                        \"start\": 6686,\n                        \"end\": 6706\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 6706,\n                        \"end\": 6722\n                    },\n                    \"flags\": 256,\n                    \"start\": 6686,\n                    \"end\": 6722\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 6722,\n                    \"end\": 6724\n                },\n                \"flags\": 256,\n                \"start\": 6686,\n                \"end\": 6724\n            },\n            \"flags\": 128,\n            \"start\": 6686,\n            \"end\": 6724\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n",
                            "flags": 768,
                            "start": 6758,
                            "end": 30952
                        },
                        "flags": 256,
                        "start": 6750,
                        "end": 30952
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 30952,
                        "end": 30954
                    },
                    "flags": 256,
                    "start": 6750,
                    "end": 30954
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 30954,
                    "end": 30956
                },
                "flags": 256,
                "start": 6750,
                "end": 30956
            },
            "flags": 128,
            "start": 6750,
            "end": 30956
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "js",
                "rawText": "js",
                "flags": 768,
                "start": 30956,
                "end": 30958
            },
            "flags": 128,
            "start": 30956,
            "end": 30958
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 30959,
                "end": 30960
            },
            "flags": 128,
            "start": 30959,
            "end": 30960
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "nvar",
                "rawText": "nvar",
                "flags": 768,
                "start": 30961,
                "end": 30965
            },
            "flags": 128,
            "start": 30961,
            "end": 30965
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
                    "start": 30965,
                    "end": 30967
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 768,
                    "start": 30967,
                    "end": 30969
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 768,
                        "start": 30972,
                        "end": 30975
                    },
                    "typeParameters": null,
                    "parameters": [],
                    "asyncToken": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "multiline": false,
                            "flags": 256,
                            "start": 30977,
                            "end": 30977
                        },
                        "flags": 256,
                        "start": 30975,
                        "end": 30977
                    },
                    "flags": 256,
                    "start": 30969,
                    "end": 30977
                },
                "flags": 256,
                "start": 30965,
                "end": 30977
            },
            "flags": 128,
            "start": 30965,
            "end": 30977
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 30978,
                "end": 30979
            },
            "flags": 128,
            "start": 30978,
            "end": 30979
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 30980,
                "end": 30981
            },
            "flags": 128,
            "start": 30980,
            "end": 30981
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 768,
                "start": 30981,
                "end": 30991
            },
            "flags": 128,
            "start": 30981,
            "end": 30991
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 768,
                "start": 30991,
                "end": 30995
            },
            "flags": 128,
            "start": 30991,
            "end": 30995
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 30996,
                "end": 30997
            },
            "flags": 128,
            "start": 30996,
            "end": 30997
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 30998,
                "end": 30999
            },
            "flags": 128,
            "start": 30998,
            "end": 30999
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 31003,
                "end": 31004
            },
            "flags": 128,
            "start": 31003,
            "end": 31004
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
                                "start": 31005,
                                "end": 31006
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 31006,
                                "end": 31008
                            },
                            "flags": 256,
                            "start": 31005,
                            "end": 31008
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 31008,
                            "end": 31010
                        },
                        "flags": 256,
                        "start": 31005,
                        "end": 31010
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n",
                        "rawText": "\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n",
                        "flags": 768,
                        "start": 31010,
                        "end": 31067
                    },
                    "flags": 256,
                    "start": 31005,
                    "end": 31067
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 31067,
                    "end": 31069
                },
                "flags": 256,
                "start": 31005,
                "end": 31069
            },
            "flags": 128,
            "start": 31005,
            "end": 31069
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 31069,
                "end": 31079
            },
            "flags": 128,
            "start": 31069,
            "end": 31079
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 31080,
                "end": 31081
            },
            "flags": 128,
            "start": 31080,
            "end": 31081
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 31082,
                "end": 31083
            },
            "flags": 128,
            "start": 31082,
            "end": 31083
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 31084,
                "end": 31084
            },
            "flags": 128,
            "start": 31083,
            "end": 31084
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 31085,
                "end": 31086
            },
            "flags": 128,
            "start": 31085,
            "end": 31086
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 31087,
                "end": 31088
            },
            "flags": 128,
            "start": 31087,
            "end": 31088
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392131,
                        "text": "kind\": 196,\r\n    \"source\": \"var v = () => {\\n     yield foo\\n  }\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67592,\r\n                                \"typeParameters\": null,\r\n                                \"arrowParameters\": {\r\n                                    \"kind\": 65545,\r\n                                    \"elements\": [],\r\n                                    \"type\": null,\r\n                                    \"accessModifier\": null,\r\n                                    \"trailingComma\": false,\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 7,\r\n                                    \"end\": 7\r\n                                },\r\n                                \"contents\": {\r\n                                    \"kind\": 91,\r\n                                    \"functionStatementList\": {\r\n                                        \"kind\": 94,\r\n                                        \"statements\": [\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"yield\",\r\n                                                    \"rawText\": \"yield\",\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 15,\r\n                                                    \"end\": 26\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 15,\r\n                                                \"end\": 26\r\n                                            },\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"foo\",\r\n                                                    \"rawText\": \"foo\",\r\n                                                    \"flags\": 2,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 26,\r\n                                                    \"end\": 30\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 26,\r\n                                                \"end\": 30\r\n                                            }\r\n                                        ],\r\n                                        \"multiline\": true,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 0,\r\n                                        \"start\": 15,\r\n                                        \"end\": 30\r\n                                    },\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 34\r\n                                },\r\n                                \"flags\": 536870912,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 34\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 34\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 34\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 34\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [\r\n        {\r\n            \"kind\": 2,\r\n            \"source\": 2,\r\n            \"message\": \"';' expected.\",\r\n            \"start\": 27,\r\n            \"length\": 0\r\n        }\r\n    ],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 34\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "rawText": "kind\": 196,\r\n    \"source\": \"var v = () => {\\n     yield foo\\n  }\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67592,\r\n                                \"typeParameters\": null,\r\n                                \"arrowParameters\": {\r\n                                    \"kind\": 65545,\r\n                                    \"elements\": [],\r\n                                    \"type\": null,\r\n                                    \"accessModifier\": null,\r\n                                    \"trailingComma\": false,\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 7,\r\n                                    \"end\": 7\r\n                                },\r\n                                \"contents\": {\r\n                                    \"kind\": 91,\r\n                                    \"functionStatementList\": {\r\n                                        \"kind\": 94,\r\n                                        \"statements\": [\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"yield\",\r\n                                                    \"rawText\": \"yield\",\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 15,\r\n                                                    \"end\": 26\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 15,\r\n                                                \"end\": 26\r\n                                            },\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"foo\",\r\n                                                    \"rawText\": \"foo\",\r\n                                                    \"flags\": 2,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 26,\r\n                                                    \"end\": 30\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 26,\r\n                                                \"end\": 30\r\n                                            }\r\n                                        ],\r\n                                        \"multiline\": true,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 0,\r\n                                        \"start\": 15,\r\n                                        \"end\": 30\r\n                                    },\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 34\r\n                                },\r\n                                \"flags\": 536870912,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 34\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 34\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 34\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 34\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [\r\n        {\r\n            \"kind\": 2,\r\n            \"source\": 2,\r\n            \"message\": \"';' expected.\",\r\n            \"start\": 27,\r\n            \"length\": 0\r\n        }\r\n    ],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 34\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "flags": 768,
                        "start": 31093,
                        "end": 38258
                    },
                    {
                        "kind": 201392131,
                        "text": "fileName",
                        "rawText": "fileName",
                        "flags": 769,
                        "start": 38259,
                        "end": 38274
                    }
                ],
                "flags": 256,
                "start": 31093,
                "end": 38274
            },
            "flags": 128,
            "start": 31093,
            "end": 38274
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
                        "start": 38275,
                        "end": 38286
                    },
                    {
                        "kind": 201392131,
                        "text": "flags",
                        "rawText": "flags",
                        "flags": 769,
                        "start": 38287,
                        "end": 38299
                    }
                ],
                "flags": 256,
                "start": 38275,
                "end": 38299
            },
            "flags": 128,
            "start": 38275,
            "end": 38299
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
                        "start": 38300,
                        "end": 38302
                    },
                    {
                        "kind": 201392131,
                        "text": "diagnostics",
                        "rawText": "diagnostics",
                        "flags": 769,
                        "start": 38303,
                        "end": 38321
                    }
                ],
                "flags": 256,
                "start": 38300,
                "end": 38321
            },
            "flags": 128,
            "start": 38300,
            "end": 38321
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
                                                    "start": 38354,
                                                    "end": 38356
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 38334,
                                                    "end": 38353
                                                },
                                                "flags": 256,
                                                "start": 38334,
                                                "end": 38356
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 38379,
                                                    "end": 38381
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 38357,
                                                    "end": 38378
                                                },
                                                "flags": 256,
                                                "start": 38357,
                                                "end": 38381
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 38402,
                                                    "end": 38404
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 38382,
                                                    "end": 38401
                                                },
                                                "flags": 256,
                                                "start": 38382,
                                                "end": 38404
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 38426,
                                                    "end": 38446
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 38405,
                                                    "end": 38425
                                                },
                                                "flags": 256,
                                                "start": 38405,
                                                "end": 38446
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6,
                                                    "rawText": "6",
                                                    "flags": 768,
                                                    "start": 38468,
                                                    "end": 38470
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 38447,
                                                    "end": 38467
                                                },
                                                "flags": 256,
                                                "start": 38447,
                                                "end": 38470
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 38490,
                                                    "end": 38493
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 38471,
                                                    "end": 38489
                                                },
                                                "flags": 256,
                                                "start": 38471,
                                                "end": 38493
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 38334,
                                        "end": 38493
                                    },
                                    "flags": 256,
                                    "start": 38324,
                                    "end": 38503
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
                                                    "start": 38534,
                                                    "end": 38536
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 38514,
                                                    "end": 38533
                                                },
                                                "flags": 256,
                                                "start": 38514,
                                                "end": 38536
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 38559,
                                                    "end": 38561
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 38537,
                                                    "end": 38558
                                                },
                                                "flags": 256,
                                                "start": 38537,
                                                "end": 38561
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 38582,
                                                    "end": 38584
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 38562,
                                                    "end": 38581
                                                },
                                                "flags": 256,
                                                "start": 38562,
                                                "end": 38584
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 38606,
                                                    "end": 38626
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 38585,
                                                    "end": 38605
                                                },
                                                "flags": 256,
                                                "start": 38585,
                                                "end": 38626
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 38648,
                                                    "end": 38651
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 38627,
                                                    "end": 38647
                                                },
                                                "flags": 256,
                                                "start": 38627,
                                                "end": 38651
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 38671,
                                                    "end": 38674
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 38652,
                                                    "end": 38670
                                                },
                                                "flags": 256,
                                                "start": 38652,
                                                "end": 38674
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 38514,
                                        "end": 38674
                                    },
                                    "flags": 256,
                                    "start": 38504,
                                    "end": 38684
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
                                                    "start": 38715,
                                                    "end": 38717
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 38695,
                                                    "end": 38714
                                                },
                                                "flags": 256,
                                                "start": 38695,
                                                "end": 38717
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 38740,
                                                    "end": 38742
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 38718,
                                                    "end": 38739
                                                },
                                                "flags": 256,
                                                "start": 38718,
                                                "end": 38742
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 768,
                                                    "start": 38763,
                                                    "end": 38765
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 38743,
                                                    "end": 38762
                                                },
                                                "flags": 256,
                                                "start": 38743,
                                                "end": 38765
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Statement expected",
                                                    "rawText": "Statement expected",
                                                    "flags": 768,
                                                    "start": 38787,
                                                    "end": 38808
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 38766,
                                                    "end": 38786
                                                },
                                                "flags": 256,
                                                "start": 38766,
                                                "end": 38808
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 38830,
                                                    "end": 38833
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 38809,
                                                    "end": 38829
                                                },
                                                "flags": 256,
                                                "start": 38809,
                                                "end": 38833
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 38853,
                                                    "end": 38856
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 38834,
                                                    "end": 38852
                                                },
                                                "flags": 256,
                                                "start": 38834,
                                                "end": 38856
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 38695,
                                        "end": 38856
                                    },
                                    "flags": 256,
                                    "start": 38685,
                                    "end": 38866
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
                                                    "start": 38897,
                                                    "end": 38899
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 38877,
                                                    "end": 38896
                                                },
                                                "flags": 256,
                                                "start": 38877,
                                                "end": 38899
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 38922,
                                                    "end": 38924
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 38900,
                                                    "end": 38921
                                                },
                                                "flags": 256,
                                                "start": 38900,
                                                "end": 38924
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 38945,
                                                    "end": 38947
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 38925,
                                                    "end": 38944
                                                },
                                                "flags": 256,
                                                "start": 38925,
                                                "end": 38947
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 38969,
                                                    "end": 38989
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 38948,
                                                    "end": 38968
                                                },
                                                "flags": 256,
                                                "start": 38948,
                                                "end": 38989
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 39011,
                                                    "end": 39014
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 38990,
                                                    "end": 39010
                                                },
                                                "flags": 256,
                                                "start": 38990,
                                                "end": 39014
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 39034,
                                                    "end": 39037
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 39015,
                                                    "end": 39033
                                                },
                                                "flags": 256,
                                                "start": 39015,
                                                "end": 39037
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 38877,
                                        "end": 39037
                                    },
                                    "flags": 256,
                                    "start": 38867,
                                    "end": 39047
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
                                                    "start": 39078,
                                                    "end": 39080
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 39058,
                                                    "end": 39077
                                                },
                                                "flags": 256,
                                                "start": 39058,
                                                "end": 39080
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 39103,
                                                    "end": 39105
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 39081,
                                                    "end": 39102
                                                },
                                                "flags": 256,
                                                "start": 39081,
                                                "end": 39105
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 39126,
                                                    "end": 39129
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 39106,
                                                    "end": 39125
                                                },
                                                "flags": 256,
                                                "start": 39106,
                                                "end": 39129
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 39151,
                                                    "end": 39210
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 39130,
                                                    "end": 39150
                                                },
                                                "flags": 256,
                                                "start": 39130,
                                                "end": 39210
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 39232,
                                                    "end": 39235
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 39211,
                                                    "end": 39231
                                                },
                                                "flags": 256,
                                                "start": 39211,
                                                "end": 39235
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 39255,
                                                    "end": 39258
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 39236,
                                                    "end": 39254
                                                },
                                                "flags": 256,
                                                "start": 39236,
                                                "end": 39258
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 39058,
                                        "end": 39258
                                    },
                                    "flags": 256,
                                    "start": 39048,
                                    "end": 39268
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
                                                    "start": 39299,
                                                    "end": 39301
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 39279,
                                                    "end": 39298
                                                },
                                                "flags": 256,
                                                "start": 39279,
                                                "end": 39301
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 39324,
                                                    "end": 39326
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 39302,
                                                    "end": 39323
                                                },
                                                "flags": 256,
                                                "start": 39302,
                                                "end": 39326
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 39347,
                                                    "end": 39349
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 39327,
                                                    "end": 39346
                                                },
                                                "flags": 256,
                                                "start": 39327,
                                                "end": 39349
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 39371,
                                                    "end": 39391
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 39350,
                                                    "end": 39370
                                                },
                                                "flags": 256,
                                                "start": 39350,
                                                "end": 39391
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 39413,
                                                    "end": 39416
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 39392,
                                                    "end": 39412
                                                },
                                                "flags": 256,
                                                "start": 39392,
                                                "end": 39416
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 39436,
                                                    "end": 39439
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 39417,
                                                    "end": 39435
                                                },
                                                "flags": 256,
                                                "start": 39417,
                                                "end": 39439
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 39279,
                                        "end": 39439
                                    },
                                    "flags": 256,
                                    "start": 39269,
                                    "end": 39449
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
                                                    "start": 39480,
                                                    "end": 39482
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 39460,
                                                    "end": 39479
                                                },
                                                "flags": 256,
                                                "start": 39460,
                                                "end": 39482
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 39505,
                                                    "end": 39507
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 39483,
                                                    "end": 39504
                                                },
                                                "flags": 256,
                                                "start": 39483,
                                                "end": 39507
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 39528,
                                                    "end": 39531
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 39508,
                                                    "end": 39527
                                                },
                                                "flags": 256,
                                                "start": 39508,
                                                "end": 39531
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 39553,
                                                    "end": 39612
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 39532,
                                                    "end": 39552
                                                },
                                                "flags": 256,
                                                "start": 39532,
                                                "end": 39612
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 39634,
                                                    "end": 39637
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 39613,
                                                    "end": 39633
                                                },
                                                "flags": 256,
                                                "start": 39613,
                                                "end": 39637
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 39657,
                                                    "end": 39660
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 39638,
                                                    "end": 39656
                                                },
                                                "flags": 256,
                                                "start": 39638,
                                                "end": 39660
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 39460,
                                        "end": 39660
                                    },
                                    "flags": 256,
                                    "start": 39450,
                                    "end": 39670
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
                                                    "start": 39701,
                                                    "end": 39703
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 39681,
                                                    "end": 39700
                                                },
                                                "flags": 256,
                                                "start": 39681,
                                                "end": 39703
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 39726,
                                                    "end": 39728
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 39704,
                                                    "end": 39725
                                                },
                                                "flags": 256,
                                                "start": 39704,
                                                "end": 39728
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 39749,
                                                    "end": 39751
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 39729,
                                                    "end": 39748
                                                },
                                                "flags": 256,
                                                "start": 39729,
                                                "end": 39751
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 39773,
                                                    "end": 39793
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 39752,
                                                    "end": 39772
                                                },
                                                "flags": 256,
                                                "start": 39752,
                                                "end": 39793
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 84,
                                                    "rawText": "84",
                                                    "flags": 768,
                                                    "start": 39815,
                                                    "end": 39818
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 39794,
                                                    "end": 39814
                                                },
                                                "flags": 256,
                                                "start": 39794,
                                                "end": 39818
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 89,
                                                    "rawText": "89",
                                                    "flags": 768,
                                                    "start": 39838,
                                                    "end": 39841
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 39819,
                                                    "end": 39837
                                                },
                                                "flags": 256,
                                                "start": 39819,
                                                "end": 39841
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 39681,
                                        "end": 39841
                                    },
                                    "flags": 256,
                                    "start": 39671,
                                    "end": 39851
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
                                                    "start": 39882,
                                                    "end": 39884
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 39862,
                                                    "end": 39881
                                                },
                                                "flags": 256,
                                                "start": 39862,
                                                "end": 39884
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 39907,
                                                    "end": 39909
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 39885,
                                                    "end": 39906
                                                },
                                                "flags": 256,
                                                "start": 39885,
                                                "end": 39909
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 39930,
                                                    "end": 39933
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 39910,
                                                    "end": 39929
                                                },
                                                "flags": 256,
                                                "start": 39910,
                                                "end": 39933
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 39955,
                                                    "end": 40014
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 39934,
                                                    "end": 39954
                                                },
                                                "flags": 256,
                                                "start": 39934,
                                                "end": 40014
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 84,
                                                    "rawText": "84",
                                                    "flags": 768,
                                                    "start": 40036,
                                                    "end": 40039
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 40015,
                                                    "end": 40035
                                                },
                                                "flags": 256,
                                                "start": 40015,
                                                "end": 40039
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 89,
                                                    "rawText": "89",
                                                    "flags": 768,
                                                    "start": 40059,
                                                    "end": 40062
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 40040,
                                                    "end": 40058
                                                },
                                                "flags": 256,
                                                "start": 40040,
                                                "end": 40062
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 39862,
                                        "end": 40062
                                    },
                                    "flags": 256,
                                    "start": 39852,
                                    "end": 40072
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
                                                    "start": 40103,
                                                    "end": 40105
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 40083,
                                                    "end": 40102
                                                },
                                                "flags": 256,
                                                "start": 40083,
                                                "end": 40105
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 40128,
                                                    "end": 40130
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 40106,
                                                    "end": 40127
                                                },
                                                "flags": 256,
                                                "start": 40106,
                                                "end": 40130
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 40151,
                                                    "end": 40153
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 40131,
                                                    "end": 40150
                                                },
                                                "flags": 256,
                                                "start": 40131,
                                                "end": 40153
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 40175,
                                                    "end": 40195
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 40154,
                                                    "end": 40174
                                                },
                                                "flags": 256,
                                                "start": 40154,
                                                "end": 40195
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 89,
                                                    "rawText": "89",
                                                    "flags": 768,
                                                    "start": 40217,
                                                    "end": 40220
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 40196,
                                                    "end": 40216
                                                },
                                                "flags": 256,
                                                "start": 40196,
                                                "end": 40220
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 90,
                                                    "rawText": "90",
                                                    "flags": 768,
                                                    "start": 40240,
                                                    "end": 40243
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 40221,
                                                    "end": 40239
                                                },
                                                "flags": 256,
                                                "start": 40221,
                                                "end": 40243
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 40083,
                                        "end": 40243
                                    },
                                    "flags": 256,
                                    "start": 40073,
                                    "end": 40253
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
                                                    "start": 40284,
                                                    "end": 40286
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 40264,
                                                    "end": 40283
                                                },
                                                "flags": 256,
                                                "start": 40264,
                                                "end": 40286
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 40309,
                                                    "end": 40311
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 40287,
                                                    "end": 40308
                                                },
                                                "flags": 256,
                                                "start": 40287,
                                                "end": 40311
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 40332,
                                                    "end": 40335
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 40312,
                                                    "end": 40331
                                                },
                                                "flags": 256,
                                                "start": 40312,
                                                "end": 40335
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 40357,
                                                    "end": 40416
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 40336,
                                                    "end": 40356
                                                },
                                                "flags": 256,
                                                "start": 40336,
                                                "end": 40416
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 89,
                                                    "rawText": "89",
                                                    "flags": 768,
                                                    "start": 40438,
                                                    "end": 40441
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 40417,
                                                    "end": 40437
                                                },
                                                "flags": 256,
                                                "start": 40417,
                                                "end": 40441
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 90,
                                                    "rawText": "90",
                                                    "flags": 768,
                                                    "start": 40461,
                                                    "end": 40464
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 40442,
                                                    "end": 40460
                                                },
                                                "flags": 256,
                                                "start": 40442,
                                                "end": 40464
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 40264,
                                        "end": 40464
                                    },
                                    "flags": 256,
                                    "start": 40254,
                                    "end": 40474
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
                                                    "start": 40505,
                                                    "end": 40507
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 40485,
                                                    "end": 40504
                                                },
                                                "flags": 256,
                                                "start": 40485,
                                                "end": 40507
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 40530,
                                                    "end": 40532
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 40508,
                                                    "end": 40529
                                                },
                                                "flags": 256,
                                                "start": 40508,
                                                "end": 40532
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 40553,
                                                    "end": 40555
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 40533,
                                                    "end": 40552
                                                },
                                                "flags": 256,
                                                "start": 40533,
                                                "end": 40555
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 40577,
                                                    "end": 40597
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 40556,
                                                    "end": 40576
                                                },
                                                "flags": 256,
                                                "start": 40556,
                                                "end": 40597
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 97,
                                                    "rawText": "97",
                                                    "flags": 768,
                                                    "start": 40619,
                                                    "end": 40622
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 40598,
                                                    "end": 40618
                                                },
                                                "flags": 256,
                                                "start": 40598,
                                                "end": 40622
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 104,
                                                    "rawText": "104",
                                                    "flags": 768,
                                                    "start": 40642,
                                                    "end": 40646
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 40623,
                                                    "end": 40641
                                                },
                                                "flags": 256,
                                                "start": 40623,
                                                "end": 40646
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 40485,
                                        "end": 40646
                                    },
                                    "flags": 256,
                                    "start": 40475,
                                    "end": 40656
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
                                                    "start": 40687,
                                                    "end": 40689
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 40667,
                                                    "end": 40686
                                                },
                                                "flags": 256,
                                                "start": 40667,
                                                "end": 40689
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 40712,
                                                    "end": 40714
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 40690,
                                                    "end": 40711
                                                },
                                                "flags": 256,
                                                "start": 40690,
                                                "end": 40714
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 40735,
                                                    "end": 40738
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 40715,
                                                    "end": 40734
                                                },
                                                "flags": 256,
                                                "start": 40715,
                                                "end": 40738
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 40760,
                                                    "end": 40819
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 40739,
                                                    "end": 40759
                                                },
                                                "flags": 256,
                                                "start": 40739,
                                                "end": 40819
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 97,
                                                    "rawText": "97",
                                                    "flags": 768,
                                                    "start": 40841,
                                                    "end": 40844
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 40820,
                                                    "end": 40840
                                                },
                                                "flags": 256,
                                                "start": 40820,
                                                "end": 40844
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 104,
                                                    "rawText": "104",
                                                    "flags": 768,
                                                    "start": 40864,
                                                    "end": 40868
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 40845,
                                                    "end": 40863
                                                },
                                                "flags": 256,
                                                "start": 40845,
                                                "end": 40868
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 40667,
                                        "end": 40868
                                    },
                                    "flags": 256,
                                    "start": 40657,
                                    "end": 40878
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
                                                    "start": 40909,
                                                    "end": 40911
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 40889,
                                                    "end": 40908
                                                },
                                                "flags": 256,
                                                "start": 40889,
                                                "end": 40911
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 40934,
                                                    "end": 40936
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 40912,
                                                    "end": 40933
                                                },
                                                "flags": 256,
                                                "start": 40912,
                                                "end": 40936
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 40957,
                                                    "end": 40959
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 40937,
                                                    "end": 40956
                                                },
                                                "flags": 256,
                                                "start": 40937,
                                                "end": 40959
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 40981,
                                                    "end": 41001
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 40960,
                                                    "end": 40980
                                                },
                                                "flags": 256,
                                                "start": 40960,
                                                "end": 41001
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 104,
                                                    "rawText": "104",
                                                    "flags": 768,
                                                    "start": 41023,
                                                    "end": 41027
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 41002,
                                                    "end": 41022
                                                },
                                                "flags": 256,
                                                "start": 41002,
                                                "end": 41027
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 105,
                                                    "rawText": "105",
                                                    "flags": 768,
                                                    "start": 41047,
                                                    "end": 41051
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 41028,
                                                    "end": 41046
                                                },
                                                "flags": 256,
                                                "start": 41028,
                                                "end": 41051
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 40889,
                                        "end": 41051
                                    },
                                    "flags": 256,
                                    "start": 40879,
                                    "end": 41061
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
                                                    "start": 41092,
                                                    "end": 41094
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 41072,
                                                    "end": 41091
                                                },
                                                "flags": 256,
                                                "start": 41072,
                                                "end": 41094
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 41117,
                                                    "end": 41119
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 41095,
                                                    "end": 41116
                                                },
                                                "flags": 256,
                                                "start": 41095,
                                                "end": 41119
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 41140,
                                                    "end": 41143
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 41120,
                                                    "end": 41139
                                                },
                                                "flags": 256,
                                                "start": 41120,
                                                "end": 41143
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 41165,
                                                    "end": 41224
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 41144,
                                                    "end": 41164
                                                },
                                                "flags": 256,
                                                "start": 41144,
                                                "end": 41224
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 104,
                                                    "rawText": "104",
                                                    "flags": 768,
                                                    "start": 41246,
                                                    "end": 41250
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 41225,
                                                    "end": 41245
                                                },
                                                "flags": 256,
                                                "start": 41225,
                                                "end": 41250
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 105,
                                                    "rawText": "105",
                                                    "flags": 768,
                                                    "start": 41270,
                                                    "end": 41274
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 41251,
                                                    "end": 41269
                                                },
                                                "flags": 256,
                                                "start": 41251,
                                                "end": 41274
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 41072,
                                        "end": 41274
                                    },
                                    "flags": 256,
                                    "start": 41062,
                                    "end": 41284
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
                                                    "start": 41315,
                                                    "end": 41317
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 41295,
                                                    "end": 41314
                                                },
                                                "flags": 256,
                                                "start": 41295,
                                                "end": 41317
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 41340,
                                                    "end": 41342
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 41318,
                                                    "end": 41339
                                                },
                                                "flags": 256,
                                                "start": 41318,
                                                "end": 41342
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 41363,
                                                    "end": 41365
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 41343,
                                                    "end": 41362
                                                },
                                                "flags": 256,
                                                "start": 41343,
                                                "end": 41365
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 41387,
                                                    "end": 41407
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 41366,
                                                    "end": 41386
                                                },
                                                "flags": 256,
                                                "start": 41366,
                                                "end": 41407
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 105,
                                                    "rawText": "105",
                                                    "flags": 768,
                                                    "start": 41429,
                                                    "end": 41433
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 41408,
                                                    "end": 41428
                                                },
                                                "flags": 256,
                                                "start": 41408,
                                                "end": 41433
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 106,
                                                    "rawText": "106",
                                                    "flags": 768,
                                                    "start": 41453,
                                                    "end": 41457
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 41434,
                                                    "end": 41452
                                                },
                                                "flags": 256,
                                                "start": 41434,
                                                "end": 41457
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 41295,
                                        "end": 41457
                                    },
                                    "flags": 256,
                                    "start": 41285,
                                    "end": 41467
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
                                                    "start": 41498,
                                                    "end": 41500
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 41478,
                                                    "end": 41497
                                                },
                                                "flags": 256,
                                                "start": 41478,
                                                "end": 41500
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 41523,
                                                    "end": 41525
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 41501,
                                                    "end": 41522
                                                },
                                                "flags": 256,
                                                "start": 41501,
                                                "end": 41525
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 41546,
                                                    "end": 41549
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 41526,
                                                    "end": 41545
                                                },
                                                "flags": 256,
                                                "start": 41526,
                                                "end": 41549
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 41571,
                                                    "end": 41630
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 41550,
                                                    "end": 41570
                                                },
                                                "flags": 256,
                                                "start": 41550,
                                                "end": 41630
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 105,
                                                    "rawText": "105",
                                                    "flags": 768,
                                                    "start": 41652,
                                                    "end": 41656
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 41631,
                                                    "end": 41651
                                                },
                                                "flags": 256,
                                                "start": 41631,
                                                "end": 41656
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 106,
                                                    "rawText": "106",
                                                    "flags": 768,
                                                    "start": 41676,
                                                    "end": 41680
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 41657,
                                                    "end": 41675
                                                },
                                                "flags": 256,
                                                "start": 41657,
                                                "end": 41680
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 41478,
                                        "end": 41680
                                    },
                                    "flags": 256,
                                    "start": 41468,
                                    "end": 41690
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
                                                    "start": 41721,
                                                    "end": 41723
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 41701,
                                                    "end": 41720
                                                },
                                                "flags": 256,
                                                "start": 41701,
                                                "end": 41723
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 41746,
                                                    "end": 41748
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 41724,
                                                    "end": 41745
                                                },
                                                "flags": 256,
                                                "start": 41724,
                                                "end": 41748
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 41769,
                                                    "end": 41771
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 41749,
                                                    "end": 41768
                                                },
                                                "flags": 256,
                                                "start": 41749,
                                                "end": 41771
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 41793,
                                                    "end": 41813
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 41772,
                                                    "end": 41792
                                                },
                                                "flags": 256,
                                                "start": 41772,
                                                "end": 41813
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 113,
                                                    "rawText": "113",
                                                    "flags": 768,
                                                    "start": 41835,
                                                    "end": 41839
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 41814,
                                                    "end": 41834
                                                },
                                                "flags": 256,
                                                "start": 41814,
                                                "end": 41839
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 117,
                                                    "rawText": "117",
                                                    "flags": 768,
                                                    "start": 41859,
                                                    "end": 41863
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 41840,
                                                    "end": 41858
                                                },
                                                "flags": 256,
                                                "start": 41840,
                                                "end": 41863
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 41701,
                                        "end": 41863
                                    },
                                    "flags": 256,
                                    "start": 41691,
                                    "end": 41873
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
                                                    "start": 41904,
                                                    "end": 41906
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 41884,
                                                    "end": 41903
                                                },
                                                "flags": 256,
                                                "start": 41884,
                                                "end": 41906
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 41929,
                                                    "end": 41931
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 41907,
                                                    "end": 41928
                                                },
                                                "flags": 256,
                                                "start": 41907,
                                                "end": 41931
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 41952,
                                                    "end": 41954
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 41932,
                                                    "end": 41951
                                                },
                                                "flags": 256,
                                                "start": 41932,
                                                "end": 41954
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 41976,
                                                    "end": 41996
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 41955,
                                                    "end": 41975
                                                },
                                                "flags": 256,
                                                "start": 41955,
                                                "end": 41996
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6613,
                                                    "rawText": "6613",
                                                    "flags": 768,
                                                    "start": 42018,
                                                    "end": 42023
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 41997,
                                                    "end": 42017
                                                },
                                                "flags": 256,
                                                "start": 41997,
                                                "end": 42023
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6618,
                                                    "rawText": "6618",
                                                    "flags": 768,
                                                    "start": 42043,
                                                    "end": 42048
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 42024,
                                                    "end": 42042
                                                },
                                                "flags": 256,
                                                "start": 42024,
                                                "end": 42048
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 41884,
                                        "end": 42048
                                    },
                                    "flags": 256,
                                    "start": 41874,
                                    "end": 42058
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
                                                    "start": 42089,
                                                    "end": 42091
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 42069,
                                                    "end": 42088
                                                },
                                                "flags": 256,
                                                "start": 42069,
                                                "end": 42091
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 42114,
                                                    "end": 42116
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 42092,
                                                    "end": 42113
                                                },
                                                "flags": 256,
                                                "start": 42092,
                                                "end": 42116
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 42137,
                                                    "end": 42140
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 42117,
                                                    "end": 42136
                                                },
                                                "flags": 256,
                                                "start": 42117,
                                                "end": 42140
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 42162,
                                                    "end": 42221
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 42141,
                                                    "end": 42161
                                                },
                                                "flags": 256,
                                                "start": 42141,
                                                "end": 42221
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6613,
                                                    "rawText": "6613",
                                                    "flags": 768,
                                                    "start": 42243,
                                                    "end": 42248
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 42222,
                                                    "end": 42242
                                                },
                                                "flags": 256,
                                                "start": 42222,
                                                "end": 42248
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6618,
                                                    "rawText": "6618",
                                                    "flags": 768,
                                                    "start": 42268,
                                                    "end": 42273
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 42249,
                                                    "end": 42267
                                                },
                                                "flags": 256,
                                                "start": 42249,
                                                "end": 42273
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 42069,
                                        "end": 42273
                                    },
                                    "flags": 256,
                                    "start": 42059,
                                    "end": 42283
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
                                                    "start": 42314,
                                                    "end": 42316
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 42294,
                                                    "end": 42313
                                                },
                                                "flags": 256,
                                                "start": 42294,
                                                "end": 42316
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 42339,
                                                    "end": 42341
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 42317,
                                                    "end": 42338
                                                },
                                                "flags": 256,
                                                "start": 42317,
                                                "end": 42341
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 42362,
                                                    "end": 42364
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 42342,
                                                    "end": 42361
                                                },
                                                "flags": 256,
                                                "start": 42342,
                                                "end": 42364
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 42386,
                                                    "end": 42406
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 42365,
                                                    "end": 42385
                                                },
                                                "flags": 256,
                                                "start": 42365,
                                                "end": 42406
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6618,
                                                    "rawText": "6618",
                                                    "flags": 768,
                                                    "start": 42428,
                                                    "end": 42433
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 42407,
                                                    "end": 42427
                                                },
                                                "flags": 256,
                                                "start": 42407,
                                                "end": 42433
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6619,
                                                    "rawText": "6619",
                                                    "flags": 768,
                                                    "start": 42453,
                                                    "end": 42458
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 42434,
                                                    "end": 42452
                                                },
                                                "flags": 256,
                                                "start": 42434,
                                                "end": 42458
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 42294,
                                        "end": 42458
                                    },
                                    "flags": 256,
                                    "start": 42284,
                                    "end": 42468
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
                                                    "start": 42499,
                                                    "end": 42501
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 42479,
                                                    "end": 42498
                                                },
                                                "flags": 256,
                                                "start": 42479,
                                                "end": 42501
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 42524,
                                                    "end": 42526
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 42502,
                                                    "end": 42523
                                                },
                                                "flags": 256,
                                                "start": 42502,
                                                "end": 42526
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 42547,
                                                    "end": 42550
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 42527,
                                                    "end": 42546
                                                },
                                                "flags": 256,
                                                "start": 42527,
                                                "end": 42550
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 42572,
                                                    "end": 42631
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 42551,
                                                    "end": 42571
                                                },
                                                "flags": 256,
                                                "start": 42551,
                                                "end": 42631
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6618,
                                                    "rawText": "6618",
                                                    "flags": 768,
                                                    "start": 42653,
                                                    "end": 42658
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 42632,
                                                    "end": 42652
                                                },
                                                "flags": 256,
                                                "start": 42632,
                                                "end": 42658
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6619,
                                                    "rawText": "6619",
                                                    "flags": 768,
                                                    "start": 42678,
                                                    "end": 42683
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 42659,
                                                    "end": 42677
                                                },
                                                "flags": 256,
                                                "start": 42659,
                                                "end": 42683
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 42479,
                                        "end": 42683
                                    },
                                    "flags": 256,
                                    "start": 42469,
                                    "end": 42693
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
                                                    "start": 42724,
                                                    "end": 42726
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 42704,
                                                    "end": 42723
                                                },
                                                "flags": 256,
                                                "start": 42704,
                                                "end": 42726
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 42749,
                                                    "end": 42751
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 42727,
                                                    "end": 42748
                                                },
                                                "flags": 256,
                                                "start": 42727,
                                                "end": 42751
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 42772,
                                                    "end": 42774
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 42752,
                                                    "end": 42771
                                                },
                                                "flags": 256,
                                                "start": 42752,
                                                "end": 42774
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 42796,
                                                    "end": 42816
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 42775,
                                                    "end": 42795
                                                },
                                                "flags": 256,
                                                "start": 42775,
                                                "end": 42816
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6619,
                                                    "rawText": "6619",
                                                    "flags": 768,
                                                    "start": 42838,
                                                    "end": 42843
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 42817,
                                                    "end": 42837
                                                },
                                                "flags": 256,
                                                "start": 42817,
                                                "end": 42843
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6620,
                                                    "rawText": "6620",
                                                    "flags": 768,
                                                    "start": 42863,
                                                    "end": 42868
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 42844,
                                                    "end": 42862
                                                },
                                                "flags": 256,
                                                "start": 42844,
                                                "end": 42868
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 42704,
                                        "end": 42868
                                    },
                                    "flags": 256,
                                    "start": 42694,
                                    "end": 42878
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
                                                    "start": 42909,
                                                    "end": 42911
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 42889,
                                                    "end": 42908
                                                },
                                                "flags": 256,
                                                "start": 42889,
                                                "end": 42911
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 42934,
                                                    "end": 42936
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 42912,
                                                    "end": 42933
                                                },
                                                "flags": 256,
                                                "start": 42912,
                                                "end": 42936
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 42957,
                                                    "end": 42960
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 42937,
                                                    "end": 42956
                                                },
                                                "flags": 256,
                                                "start": 42937,
                                                "end": 42960
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 42982,
                                                    "end": 43041
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 42961,
                                                    "end": 42981
                                                },
                                                "flags": 256,
                                                "start": 42961,
                                                "end": 43041
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6619,
                                                    "rawText": "6619",
                                                    "flags": 768,
                                                    "start": 43063,
                                                    "end": 43068
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 43042,
                                                    "end": 43062
                                                },
                                                "flags": 256,
                                                "start": 43042,
                                                "end": 43068
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6620,
                                                    "rawText": "6620",
                                                    "flags": 768,
                                                    "start": 43088,
                                                    "end": 43093
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 43069,
                                                    "end": 43087
                                                },
                                                "flags": 256,
                                                "start": 43069,
                                                "end": 43093
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 42889,
                                        "end": 43093
                                    },
                                    "flags": 256,
                                    "start": 42879,
                                    "end": 43103
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
                                                    "start": 43134,
                                                    "end": 43136
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 43114,
                                                    "end": 43133
                                                },
                                                "flags": 256,
                                                "start": 43114,
                                                "end": 43136
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 43159,
                                                    "end": 43161
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 43137,
                                                    "end": 43158
                                                },
                                                "flags": 256,
                                                "start": 43137,
                                                "end": 43161
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 43182,
                                                    "end": 43184
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 43162,
                                                    "end": 43181
                                                },
                                                "flags": 256,
                                                "start": 43162,
                                                "end": 43184
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 43206,
                                                    "end": 43226
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 43185,
                                                    "end": 43205
                                                },
                                                "flags": 256,
                                                "start": 43185,
                                                "end": 43226
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6679,
                                                    "rawText": "6679",
                                                    "flags": 768,
                                                    "start": 43248,
                                                    "end": 43253
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 43227,
                                                    "end": 43247
                                                },
                                                "flags": 256,
                                                "start": 43227,
                                                "end": 43253
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6684,
                                                    "rawText": "6684",
                                                    "flags": 768,
                                                    "start": 43273,
                                                    "end": 43278
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 43254,
                                                    "end": 43272
                                                },
                                                "flags": 256,
                                                "start": 43254,
                                                "end": 43278
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 43114,
                                        "end": 43278
                                    },
                                    "flags": 256,
                                    "start": 43104,
                                    "end": 43288
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
                                                    "start": 43319,
                                                    "end": 43321
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 43299,
                                                    "end": 43318
                                                },
                                                "flags": 256,
                                                "start": 43299,
                                                "end": 43321
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 43344,
                                                    "end": 43346
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 43322,
                                                    "end": 43343
                                                },
                                                "flags": 256,
                                                "start": 43322,
                                                "end": 43346
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 43367,
                                                    "end": 43370
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 43347,
                                                    "end": 43366
                                                },
                                                "flags": 256,
                                                "start": 43347,
                                                "end": 43370
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 43392,
                                                    "end": 43451
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 43371,
                                                    "end": 43391
                                                },
                                                "flags": 256,
                                                "start": 43371,
                                                "end": 43451
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6679,
                                                    "rawText": "6679",
                                                    "flags": 768,
                                                    "start": 43473,
                                                    "end": 43478
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 43452,
                                                    "end": 43472
                                                },
                                                "flags": 256,
                                                "start": 43452,
                                                "end": 43478
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6684,
                                                    "rawText": "6684",
                                                    "flags": 768,
                                                    "start": 43498,
                                                    "end": 43503
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 43479,
                                                    "end": 43497
                                                },
                                                "flags": 256,
                                                "start": 43479,
                                                "end": 43503
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 43299,
                                        "end": 43503
                                    },
                                    "flags": 256,
                                    "start": 43289,
                                    "end": 43513
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
                                                    "start": 43544,
                                                    "end": 43546
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 43524,
                                                    "end": 43543
                                                },
                                                "flags": 256,
                                                "start": 43524,
                                                "end": 43546
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 43569,
                                                    "end": 43571
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 43547,
                                                    "end": 43568
                                                },
                                                "flags": 256,
                                                "start": 43547,
                                                "end": 43571
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 43592,
                                                    "end": 43594
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 43572,
                                                    "end": 43591
                                                },
                                                "flags": 256,
                                                "start": 43572,
                                                "end": 43594
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 43616,
                                                    "end": 43636
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 43595,
                                                    "end": 43615
                                                },
                                                "flags": 256,
                                                "start": 43595,
                                                "end": 43636
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6684,
                                                    "rawText": "6684",
                                                    "flags": 768,
                                                    "start": 43658,
                                                    "end": 43663
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 43637,
                                                    "end": 43657
                                                },
                                                "flags": 256,
                                                "start": 43637,
                                                "end": 43663
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6685,
                                                    "rawText": "6685",
                                                    "flags": 768,
                                                    "start": 43683,
                                                    "end": 43688
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 43664,
                                                    "end": 43682
                                                },
                                                "flags": 256,
                                                "start": 43664,
                                                "end": 43688
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 43524,
                                        "end": 43688
                                    },
                                    "flags": 256,
                                    "start": 43514,
                                    "end": 43698
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
                                                    "start": 43729,
                                                    "end": 43731
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 43709,
                                                    "end": 43728
                                                },
                                                "flags": 256,
                                                "start": 43709,
                                                "end": 43731
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 43754,
                                                    "end": 43756
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 43732,
                                                    "end": 43753
                                                },
                                                "flags": 256,
                                                "start": 43732,
                                                "end": 43756
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 43777,
                                                    "end": 43780
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 43757,
                                                    "end": 43776
                                                },
                                                "flags": 256,
                                                "start": 43757,
                                                "end": 43780
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 43802,
                                                    "end": 43861
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 43781,
                                                    "end": 43801
                                                },
                                                "flags": 256,
                                                "start": 43781,
                                                "end": 43861
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6684,
                                                    "rawText": "6684",
                                                    "flags": 768,
                                                    "start": 43883,
                                                    "end": 43888
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 43862,
                                                    "end": 43882
                                                },
                                                "flags": 256,
                                                "start": 43862,
                                                "end": 43888
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6685,
                                                    "rawText": "6685",
                                                    "flags": 768,
                                                    "start": 43908,
                                                    "end": 43913
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 43889,
                                                    "end": 43907
                                                },
                                                "flags": 256,
                                                "start": 43889,
                                                "end": 43913
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 43709,
                                        "end": 43913
                                    },
                                    "flags": 256,
                                    "start": 43699,
                                    "end": 43923
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
                                                    "start": 43954,
                                                    "end": 43956
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 43934,
                                                    "end": 43953
                                                },
                                                "flags": 256,
                                                "start": 43934,
                                                "end": 43956
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 43979,
                                                    "end": 43981
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 43957,
                                                    "end": 43978
                                                },
                                                "flags": 256,
                                                "start": 43957,
                                                "end": 43981
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 44002,
                                                    "end": 44004
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 43982,
                                                    "end": 44001
                                                },
                                                "flags": 256,
                                                "start": 43982,
                                                "end": 44004
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 44026,
                                                    "end": 44046
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 44005,
                                                    "end": 44025
                                                },
                                                "flags": 256,
                                                "start": 44005,
                                                "end": 44046
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6685,
                                                    "rawText": "6685",
                                                    "flags": 768,
                                                    "start": 44068,
                                                    "end": 44073
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 44047,
                                                    "end": 44067
                                                },
                                                "flags": 256,
                                                "start": 44047,
                                                "end": 44073
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6686,
                                                    "rawText": "6686",
                                                    "flags": 768,
                                                    "start": 44093,
                                                    "end": 44098
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 44074,
                                                    "end": 44092
                                                },
                                                "flags": 256,
                                                "start": 44074,
                                                "end": 44098
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 43934,
                                        "end": 44098
                                    },
                                    "flags": 256,
                                    "start": 43924,
                                    "end": 44108
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
                                                    "start": 44139,
                                                    "end": 44141
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 44119,
                                                    "end": 44138
                                                },
                                                "flags": 256,
                                                "start": 44119,
                                                "end": 44141
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 44164,
                                                    "end": 44166
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 44142,
                                                    "end": 44163
                                                },
                                                "flags": 256,
                                                "start": 44142,
                                                "end": 44166
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 44187,
                                                    "end": 44190
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 44167,
                                                    "end": 44186
                                                },
                                                "flags": 256,
                                                "start": 44167,
                                                "end": 44190
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 44212,
                                                    "end": 44271
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 44191,
                                                    "end": 44211
                                                },
                                                "flags": 256,
                                                "start": 44191,
                                                "end": 44271
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6685,
                                                    "rawText": "6685",
                                                    "flags": 768,
                                                    "start": 44293,
                                                    "end": 44298
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 44272,
                                                    "end": 44292
                                                },
                                                "flags": 256,
                                                "start": 44272,
                                                "end": 44298
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6686,
                                                    "rawText": "6686",
                                                    "flags": 768,
                                                    "start": 44318,
                                                    "end": 44323
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 44299,
                                                    "end": 44317
                                                },
                                                "flags": 256,
                                                "start": 44299,
                                                "end": 44323
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 44119,
                                        "end": 44323
                                    },
                                    "flags": 256,
                                    "start": 44109,
                                    "end": 44333
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 38324,
                            "end": 44333
                        },
                        "flags": 256,
                        "start": 38322,
                        "end": 44339
                    },
                    {
                        "kind": 201392131,
                        "text": "start",
                        "rawText": "start",
                        "flags": 769,
                        "start": 44340,
                        "end": 44352
                    }
                ],
                "flags": 256,
                "start": 38322,
                "end": 44352
            },
            "flags": 128,
            "start": 38322,
            "end": 44352
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
                        "start": 44353,
                        "end": 44355
                    },
                    {
                        "kind": 201392131,
                        "text": "end",
                        "rawText": "end",
                        "flags": 769,
                        "start": 44356,
                        "end": 44366
                    }
                ],
                "flags": 256,
                "start": 44353,
                "end": 44366
            },
            "flags": 128,
            "start": 44353,
            "end": 44366
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 6727,
                "rawText": "6727",
                "flags": 768,
                "start": 44367,
                "end": 44372
            },
            "flags": 128,
            "start": 44367,
            "end": 44372
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
                        "start": 44374,
                        "end": 44377
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Printed\n\n",
                        "rawText": "\n\n### Printed\n\n",
                        "flags": 768,
                        "start": 44377,
                        "end": 44394
                    },
                    "flags": 256,
                    "start": 44374,
                    "end": 44394
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 44394,
                    "end": 44396
                },
                "flags": 256,
                "start": 44374,
                "end": 44396
            },
            "flags": 128,
            "start": 44374,
            "end": 44396
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 44396,
                "end": 44406
            },
            "flags": 128,
            "start": 44396,
            "end": 44406
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 44406,
                "end": 44412
            },
            "flags": 128,
            "start": 44406,
            "end": 44412
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
                                    "start": 44423,
                                    "end": 44429
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 44429,
                                    "end": 44435
                                },
                                "flags": 256,
                                "start": 44423,
                                "end": 44435
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 44435,
                                "end": 44437
                            },
                            "flags": 256,
                            "start": 44423,
                            "end": 44437
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rvar v = () => {\r     yield foo\r  }\r",
                            "rawText": "js\r\nvar v = () => {\r\n     yield foo\r\n  }\r\n",
                            "flags": 768,
                            "start": 44437,
                            "end": 44481
                        },
                        "flags": 256,
                        "start": 44423,
                        "end": 44481
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 44481,
                        "end": 44483
                    },
                    "flags": 256,
                    "start": 44423,
                    "end": 44483
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 44483,
                    "end": 44485
                },
                "flags": 256,
                "start": 44423,
                "end": 44485
            },
            "flags": 128,
            "start": 44423,
            "end": 44485
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 44491,
                "end": 44498
            },
            "flags": 128,
            "start": 44491,
            "end": 44498
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 44507,
                "end": 44514
            },
            "flags": 128,
            "start": 44507,
            "end": 44514
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
                            "start": 44514,
                            "end": 44518
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 44518,
                            "end": 44526
                        },
                        "flags": 256,
                        "start": 44514,
                        "end": 44526
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"var v = () => {\n     yield foo\n  }\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 2097397,\r                \"declarationList\": {\r                    \"kind\": 244,\r                    \"declarations\": [\r                        {\r                            \"kind\": 243,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"v\",\r                                \"rawText\": \"v\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": {\r                                \"kind\": 67592,\r                                \"typeParameters\": null,\r                                \"arrowParameters\": {\r                                    \"kind\": 65545,\r                                    \"elements\": [],\r                                    \"type\": null,\r                                    \"accessModifier\": null,\r                                    \"trailingComma\": false,\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 7,\r                                    \"end\": 7\r                                },\r                                \"contents\": {\r                                    \"kind\": 91,\r                                    \"functionStatementList\": {\r                                        \"kind\": 94,\r                                        \"statements\": [\r                                            {\r                                                \"kind\": 2097233,\r                                                \"expression\": {\r                                                    \"kind\": 196712,\r                                                    \"text\": \"yield\",\r                                                    \"rawText\": \"yield\",\r                                                    \"flags\": 16384,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 15,\r                                                    \"end\": 26\r                                                },\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 15,\r                                                \"end\": 26\r                                            },\r                                            {\r                                                \"kind\": 2097233,\r                                                \"expression\": {\r                                                    \"kind\": 196712,\r                                                    \"text\": \"foo\",\r                                                    \"rawText\": \"foo\",\r                                                    \"flags\": 2,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 26,\r                                                    \"end\": 30\r                                                },\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 26,\r                                                \"end\": 30\r                                            }\r                                        ],\r                                        \"multiline\": true,\r                                        \"flags\": 16384,\r                                        \"intersects\": false,\r                                        \"transformFlags\": 0,\r                                        \"start\": 15,\r                                        \"end\": 30\r                                    },\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 13,\r                                    \"end\": 34\r                                },\r                                \"flags\": 536870912,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 7,\r                                \"end\": 34\r                            },\r                            \"flags\": 3,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 0,\r                            \"end\": 34\r                        }\r                    ],\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 34\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 0,\r                \"end\": 34\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 34\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [\r        {\r            \"kind\": 2,\r            \"source\": 2,\r            \"message\": \"';' expected.\",\r            \"start\": 27,\r            \"length\": 0\r        }\r    ],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 34\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = () => {\\n     yield foo\\n  }\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67592,\r\n                                \"typeParameters\": null,\r\n                                \"arrowParameters\": {\r\n                                    \"kind\": 65545,\r\n                                    \"elements\": [],\r\n                                    \"type\": null,\r\n                                    \"accessModifier\": null,\r\n                                    \"trailingComma\": false,\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 7,\r\n                                    \"end\": 7\r\n                                },\r\n                                \"contents\": {\r\n                                    \"kind\": 91,\r\n                                    \"functionStatementList\": {\r\n                                        \"kind\": 94,\r\n                                        \"statements\": [\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"yield\",\r\n                                                    \"rawText\": \"yield\",\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 15,\r\n                                                    \"end\": 26\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 15,\r\n                                                \"end\": 26\r\n                                            },\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"foo\",\r\n                                                    \"rawText\": \"foo\",\r\n                                                    \"flags\": 2,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 26,\r\n                                                    \"end\": 30\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 26,\r\n                                                \"end\": 30\r\n                                            }\r\n                                        ],\r\n                                        \"multiline\": true,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 0,\r\n                                        \"start\": 15,\r\n                                        \"end\": 30\r\n                                    },\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 34\r\n                                },\r\n                                \"flags\": 536870912,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 34\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 34\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 34\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 34\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [\r\n        {\r\n            \"kind\": 2,\r\n            \"source\": 2,\r\n            \"message\": \"';' expected.\",\r\n            \"start\": 27,\r\n            \"length\": 0\r\n        }\r\n    ],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 34\r\n}\r\n",
                        "flags": 768,
                        "start": 44526,
                        "end": 51012
                    },
                    "flags": 256,
                    "start": 44514,
                    "end": 51012
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 51012,
                    "end": 51014
                },
                "flags": 256,
                "start": 44514,
                "end": 51014
            },
            "flags": 128,
            "start": 44514,
            "end": 51014
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
                            "start": 51021,
                            "end": 51029
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 51029,
                            "end": 51037
                        },
                        "flags": 256,
                        "start": 51021,
                        "end": 51037
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 51037,
                        "end": 51078
                    },
                    "flags": 256,
                    "start": 51021,
                    "end": 51078
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 51078,
                    "end": 51080
                },
                "flags": 256,
                "start": 51021,
                "end": 51080
            },
            "flags": 128,
            "start": 51021,
            "end": 51080
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
                                        "start": 51087,
                                        "end": 51099
                                    },
                                    "template": {
                                        "kind": 458761,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 768,
                                        "start": 51099,
                                        "end": 51107
                                    },
                                    "flags": 256,
                                    "start": 51087,
                                    "end": 51107
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "javascript\r\r",
                                    "rawText": "javascript\r\n\r\n",
                                    "flags": 768,
                                    "start": 51107,
                                    "end": 51123
                                },
                                "flags": 256,
                                "start": 51087,
                                "end": 51123
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 51123,
                                "end": 51125
                            },
                            "flags": 256,
                            "start": 51087,
                            "end": 51125
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 51125,
                            "end": 51131
                        },
                        "flags": 256,
                        "start": 51087,
                        "end": 51131
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Diagnostics\n\n",
                        "rawText": "\n\n### Diagnostics\n\n",
                        "flags": 768,
                        "start": 51131,
                        "end": 51152
                    },
                    "flags": 256,
                    "start": 51087,
                    "end": 51152
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 51152,
                    "end": 51154
                },
                "flags": 256,
                "start": 51087,
                "end": 51154
            },
            "flags": 128,
            "start": 51087,
            "end": 51154
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 51154,
                "end": 51164
            },
            "flags": 128,
            "start": 51154,
            "end": 51164
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 51164,
                "end": 51170
            },
            "flags": 128,
            "start": 51164,
            "end": 51170
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
                                    "start": 51181,
                                    "end": 51187
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 51187,
                                    "end": 51193
                                },
                                "flags": 256,
                                "start": 51181,
                                "end": 51193
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 51193,
                                "end": 51195
                            },
                            "flags": 256,
                            "start": 51181,
                            "end": 51195
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rvar v = () => {\r     yield foo\r  }\r",
                            "rawText": "js\r\nvar v = () => {\r\n     yield foo\r\n  }\r\n",
                            "flags": 768,
                            "start": 51195,
                            "end": 51239
                        },
                        "flags": 256,
                        "start": 51181,
                        "end": 51239
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 51239,
                        "end": 51241
                    },
                    "flags": 256,
                    "start": 51181,
                    "end": 51241
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 51241,
                    "end": 51243
                },
                "flags": 256,
                "start": 51181,
                "end": 51243
            },
            "flags": 128,
            "start": 51181,
            "end": 51243
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 51249,
                "end": 51256
            },
            "flags": 128,
            "start": 51249,
            "end": 51256
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 51265,
                "end": 51272
            },
            "flags": 128,
            "start": 51265,
            "end": 51272
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
                            "start": 51272,
                            "end": 51276
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 51276,
                            "end": 51284
                        },
                        "flags": 256,
                        "start": 51272,
                        "end": 51284
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"var v = () => {\n     yield foo\n  }\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 2097397,\r                \"declarationList\": {\r                    \"kind\": 244,\r                    \"declarations\": [\r                        {\r                            \"kind\": 243,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"v\",\r                                \"rawText\": \"v\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": {\r                                \"kind\": 67592,\r                                \"typeParameters\": null,\r                                \"arrowParameters\": {\r                                    \"kind\": 65545,\r                                    \"elements\": [],\r                                    \"type\": null,\r                                    \"accessModifier\": null,\r                                    \"trailingComma\": false,\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 7,\r                                    \"end\": 7\r                                },\r                                \"contents\": {\r                                    \"kind\": 91,\r                                    \"functionStatementList\": {\r                                        \"kind\": 94,\r                                        \"statements\": [\r                                            {\r                                                \"kind\": 2097233,\r                                                \"expression\": {\r                                                    \"kind\": 196712,\r                                                    \"text\": \"yield\",\r                                                    \"rawText\": \"yield\",\r                                                    \"flags\": 16384,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 15,\r                                                    \"end\": 26\r                                                },\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 15,\r                                                \"end\": 26\r                                            },\r                                            {\r                                                \"kind\": 2097233,\r                                                \"expression\": {\r                                                    \"kind\": 196712,\r                                                    \"text\": \"foo\",\r                                                    \"rawText\": \"foo\",\r                                                    \"flags\": 2,\r                                                    \"intersects\": false,\r                                                    \"transformFlags\": 0,\r                                                    \"start\": 26,\r                                                    \"end\": 30\r                                                },\r                                                \"flags\": 0,\r                                                \"intersects\": false,\r                                                \"transformFlags\": 0,\r                                                \"start\": 26,\r                                                \"end\": 30\r                                            }\r                                        ],\r                                        \"multiline\": true,\r                                        \"flags\": 16384,\r                                        \"intersects\": false,\r                                        \"transformFlags\": 0,\r                                        \"start\": 15,\r                                        \"end\": 30\r                                    },\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 13,\r                                    \"end\": 34\r                                },\r                                \"flags\": 536870912,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 7,\r                                \"end\": 34\r                            },\r                            \"flags\": 3,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 0,\r                            \"end\": 34\r                        }\r                    ],\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 34\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 0,\r                \"end\": 34\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 34\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [\r        {\r            \"kind\": 2,\r            \"source\": 2,\r            \"message\": \"';' expected.\",\r            \"start\": 27,\r            \"length\": 0\r        }\r    ],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 34\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = () => {\\n     yield foo\\n  }\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67592,\r\n                                \"typeParameters\": null,\r\n                                \"arrowParameters\": {\r\n                                    \"kind\": 65545,\r\n                                    \"elements\": [],\r\n                                    \"type\": null,\r\n                                    \"accessModifier\": null,\r\n                                    \"trailingComma\": false,\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 7,\r\n                                    \"end\": 7\r\n                                },\r\n                                \"contents\": {\r\n                                    \"kind\": 91,\r\n                                    \"functionStatementList\": {\r\n                                        \"kind\": 94,\r\n                                        \"statements\": [\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"yield\",\r\n                                                    \"rawText\": \"yield\",\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 15,\r\n                                                    \"end\": 26\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 15,\r\n                                                \"end\": 26\r\n                                            },\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"foo\",\r\n                                                    \"rawText\": \"foo\",\r\n                                                    \"flags\": 2,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 26,\r\n                                                    \"end\": 30\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 26,\r\n                                                \"end\": 30\r\n                                            }\r\n                                        ],\r\n                                        \"multiline\": true,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 0,\r\n                                        \"start\": 15,\r\n                                        \"end\": 30\r\n                                    },\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 34\r\n                                },\r\n                                \"flags\": 536870912,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 34\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 34\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 34\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 34\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [\r\n        {\r\n            \"kind\": 2,\r\n            \"source\": 2,\r\n            \"message\": \"';' expected.\",\r\n            \"start\": 27,\r\n            \"length\": 0\r\n        }\r\n    ],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 34\r\n}\r\n",
                        "flags": 768,
                        "start": 51284,
                        "end": 57770
                    },
                    "flags": 256,
                    "start": 51272,
                    "end": 57770
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 57770,
                    "end": 57772
                },
                "flags": 256,
                "start": 51272,
                "end": 57772
            },
            "flags": 128,
            "start": 51272,
            "end": 57772
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
                            "start": 57779,
                            "end": 57787
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 57787,
                            "end": 57795
                        },
                        "flags": 256,
                        "start": 57779,
                        "end": 57795
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 57795,
                        "end": 57836
                    },
                    "flags": 256,
                    "start": 57779,
                    "end": 57836
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 57836,
                    "end": 57838
                },
                "flags": 256,
                "start": 57779,
                "end": 57838
            },
            "flags": 128,
            "start": 57779,
            "end": 57838
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
                                    "start": 57845,
                                    "end": 57857
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 57857,
                                    "end": 57865
                                },
                                "flags": 256,
                                "start": 57845,
                                "end": 57865
                            },
                            "template": {
                                "kind": 458761,
                                "text": "javascript\r\r",
                                "rawText": "javascript\r\n\r\n",
                                "flags": 768,
                                "start": 57865,
                                "end": 57881
                            },
                            "flags": 256,
                            "start": 57845,
                            "end": 57881
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 57881,
                            "end": 57883
                        },
                        "flags": 256,
                        "start": 57845,
                        "end": 57883
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 57883,
                        "end": 57889
                    },
                    "flags": 256,
                    "start": 57845,
                    "end": 57889
                },
                "template": {
                    "kind": 458761,
                    "text": "\n",
                    "rawText": "",
                    "flags": 768,
                    "start": 57889,
                    "end": 57891
                },
                "flags": 256,
                "start": 57845,
                "end": 57891
            },
            "flags": 128,
            "start": 57845,
            "end": 57891
        }
    ],
    "isModule": false,
    "text": "parser test case\r\n\r\n## Input\r\n\r\n`````js\r\nvar v = () => {\r\n     yield foo\r\n  }\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = () => {\\n     yield foo\\n  }\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67592,\r\n                                \"typeParameters\": null,\r\n                                \"arrowParameters\": {\r\n                                    \"kind\": 65545,\r\n                                    \"elements\": [],\r\n                                    \"type\": null,\r\n                                    \"accessModifier\": null,\r\n                                    \"trailingComma\": false,\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 7,\r\n                                    \"end\": 7\r\n                                },\r\n                                \"contents\": {\r\n                                    \"kind\": 91,\r\n                                    \"functionStatementList\": {\r\n                                        \"kind\": 94,\r\n                                        \"statements\": [\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"yield\",\r\n                                                    \"rawText\": \"yield\",\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 15,\r\n                                                    \"end\": 26\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 15,\r\n                                                \"end\": 26\r\n                                            },\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"foo\",\r\n                                                    \"rawText\": \"foo\",\r\n                                                    \"flags\": 2,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 26,\r\n                                                    \"end\": 30\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 26,\r\n                                                \"end\": 30\r\n                                            }\r\n                                        ],\r\n                                        \"multiline\": true,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 0,\r\n                                        \"start\": 15,\r\n                                        \"end\": 30\r\n                                    },\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 34\r\n                                },\r\n                                \"flags\": 536870912,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 34\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 34\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 34\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 34\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [\r\n        {\r\n            \"kind\": 2,\r\n            \"source\": 2,\r\n            \"message\": \"';' expected.\",\r\n            \"start\": 27,\r\n            \"length\": 0\r\n        }\r\n    ],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 34\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n\n## Output\n\n### Hybrid CST\n\n```javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\rvar v = () => {\\r     yield foo\\r  }\\r\",\n                            \"rawText\": \"js\\r\\nvar v = () => {\\r\\n     yield foo\\r\\n  }\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 80\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 80\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 80,\n                        \"end\": 82\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 82\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 82,\n                    \"end\": 84\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 84\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 84\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 90,\n                \"end\": 97\n            },\n            \"flags\": 128,\n            \"start\": 90,\n            \"end\": 97\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 106,\n                \"end\": 113\n            },\n            \"flags\": 128,\n            \"start\": 106,\n            \"end\": 113\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 113,\n                            \"end\": 117\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 117,\n                            \"end\": 125\n                        },\n                        \"flags\": 256,\n                        \"start\": 113,\n                        \"end\": 125\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\"var v = () => {\\n     yield foo\\n  }\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 2097397,\\r                \\\"declarationList\\\": {\\r                    \\\"kind\\\": 244,\\r                    \\\"declarations\\\": [\\r                        {\\r                            \\\"kind\\\": 243,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"v\\\",\\r                                \\\"rawText\\\": \\\"v\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 3,\\r                                \\\"end\\\": 5\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": null,\\r                            \\\"initializer\\\": {\\r                                \\\"kind\\\": 67592,\\r                                \\\"typeParameters\\\": null,\\r                                \\\"arrowParameters\\\": {\\r                                    \\\"kind\\\": 65545,\\r                                    \\\"elements\\\": [],\\r                                    \\\"type\\\": null,\\r                                    \\\"accessModifier\\\": null,\\r                                    \\\"trailingComma\\\": false,\\r                                    \\\"flags\\\": 0,\\r                                    \\\"intersects\\\": false,\\r                                    \\\"transformFlags\\\": 0,\\r                                    \\\"start\\\": 7,\\r                                    \\\"end\\\": 7\\r                                },\\r                                \\\"contents\\\": {\\r                                    \\\"kind\\\": 91,\\r                                    \\\"functionStatementList\\\": {\\r                                        \\\"kind\\\": 94,\\r                                        \\\"statements\\\": [\\r                                            {\\r                                                \\\"kind\\\": 2097233,\\r                                                \\\"expression\\\": {\\r                                                    \\\"kind\\\": 196712,\\r                                                    \\\"text\\\": \\\"yield\\\",\\r                                                    \\\"rawText\\\": \\\"yield\\\",\\r                                                    \\\"flags\\\": 16384,\\r                                                    \\\"intersects\\\": false,\\r                                                    \\\"transformFlags\\\": 0,\\r                                                    \\\"start\\\": 15,\\r                                                    \\\"end\\\": 26\\r                                                },\\r                                                \\\"flags\\\": 0,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 15,\\r                                                \\\"end\\\": 26\\r                                            },\\r                                            {\\r                                                \\\"kind\\\": 2097233,\\r                                                \\\"expression\\\": {\\r                                                    \\\"kind\\\": 196712,\\r                                                    \\\"text\\\": \\\"foo\\\",\\r                                                    \\\"rawText\\\": \\\"foo\\\",\\r                                                    \\\"flags\\\": 2,\\r                                                    \\\"intersects\\\": false,\\r                                                    \\\"transformFlags\\\": 0,\\r                                                    \\\"start\\\": 26,\\r                                                    \\\"end\\\": 30\\r                                                },\\r                                                \\\"flags\\\": 0,\\r                                                \\\"intersects\\\": false,\\r                                                \\\"transformFlags\\\": 0,\\r                                                \\\"start\\\": 26,\\r                                                \\\"end\\\": 30\\r                                            }\\r                                        ],\\r                                        \\\"multiline\\\": true,\\r                                        \\\"flags\\\": 16384,\\r                                        \\\"intersects\\\": false,\\r                                        \\\"transformFlags\\\": 0,\\r                                        \\\"start\\\": 15,\\r                                        \\\"end\\\": 30\\r                                    },\\r                                    \\\"flags\\\": 0,\\r                                    \\\"intersects\\\": false,\\r                                    \\\"transformFlags\\\": 0,\\r                                    \\\"start\\\": 13,\\r                                    \\\"end\\\": 34\\r                                },\\r                                \\\"flags\\\": 536870912,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 0,\\r                                \\\"start\\\": 7,\\r                                \\\"end\\\": 34\\r                            },\\r                            \\\"flags\\\": 3,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 0,\\r                            \\\"end\\\": 34\\r                        }\\r                    ],\\r                    \\\"flags\\\": 0,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 3,\\r                    \\\"end\\\": 34\\r                },\\r                \\\"flags\\\": 0,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 0,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 34\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 34\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [\\r        {\\r            \\\"kind\\\": 2,\\r            \\\"source\\\": 2,\\r            \\\"message\\\": \\\"';' expected.\\\",\\r            \\\"start\\\": 27,\\r            \\\"length\\\": 0\\r        }\\r    ],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 34\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"var v = () => {\\\\n     yield foo\\\\n  }\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 2097397,\\r\\n                \\\"declarationList\\\": {\\r\\n                    \\\"kind\\\": 244,\\r\\n                    \\\"declarations\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 243,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"v\\\",\\r\\n                                \\\"rawText\\\": \\\"v\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 3,\\r\\n                                \\\"end\\\": 5\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": null,\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 67592,\\r\\n                                \\\"typeParameters\\\": null,\\r\\n                                \\\"arrowParameters\\\": {\\r\\n                                    \\\"kind\\\": 65545,\\r\\n                                    \\\"elements\\\": [],\\r\\n                                    \\\"type\\\": null,\\r\\n                                    \\\"accessModifier\\\": null,\\r\\n                                    \\\"trailingComma\\\": false,\\r\\n                                    \\\"flags\\\": 0,\\r\\n                                    \\\"intersects\\\": false,\\r\\n                                    \\\"transformFlags\\\": 0,\\r\\n                                    \\\"start\\\": 7,\\r\\n                                    \\\"end\\\": 7\\r\\n                                },\\r\\n                                \\\"contents\\\": {\\r\\n                                    \\\"kind\\\": 91,\\r\\n                                    \\\"functionStatementList\\\": {\\r\\n                                        \\\"kind\\\": 94,\\r\\n                                        \\\"statements\\\": [\\r\\n                                            {\\r\\n                                                \\\"kind\\\": 2097233,\\r\\n                                                \\\"expression\\\": {\\r\\n                                                    \\\"kind\\\": 196712,\\r\\n                                                    \\\"text\\\": \\\"yield\\\",\\r\\n                                                    \\\"rawText\\\": \\\"yield\\\",\\r\\n                                                    \\\"flags\\\": 16384,\\r\\n                                                    \\\"intersects\\\": false,\\r\\n                                                    \\\"transformFlags\\\": 0,\\r\\n                                                    \\\"start\\\": 15,\\r\\n                                                    \\\"end\\\": 26\\r\\n                                                },\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 15,\\r\\n                                                \\\"end\\\": 26\\r\\n                                            },\\r\\n                                            {\\r\\n                                                \\\"kind\\\": 2097233,\\r\\n                                                \\\"expression\\\": {\\r\\n                                                    \\\"kind\\\": 196712,\\r\\n                                                    \\\"text\\\": \\\"foo\\\",\\r\\n                                                    \\\"rawText\\\": \\\"foo\\\",\\r\\n                                                    \\\"flags\\\": 2,\\r\\n                                                    \\\"intersects\\\": false,\\r\\n                                                    \\\"transformFlags\\\": 0,\\r\\n                                                    \\\"start\\\": 26,\\r\\n                                                    \\\"end\\\": 30\\r\\n                                                },\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 26,\\r\\n                                                \\\"end\\\": 30\\r\\n                                            }\\r\\n                                        ],\\r\\n                                        \\\"multiline\\\": true,\\r\\n                                        \\\"flags\\\": 16384,\\r\\n                                        \\\"intersects\\\": false,\\r\\n                                        \\\"transformFlags\\\": 0,\\r\\n                                        \\\"start\\\": 15,\\r\\n                                        \\\"end\\\": 30\\r\\n                                    },\\r\\n                                    \\\"flags\\\": 0,\\r\\n                                    \\\"intersects\\\": false,\\r\\n                                    \\\"transformFlags\\\": 0,\\r\\n                                    \\\"start\\\": 13,\\r\\n                                    \\\"end\\\": 34\\r\\n                                },\\r\\n                                \\\"flags\\\": 536870912,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 7,\\r\\n                                \\\"end\\\": 34\\r\\n                            },\\r\\n                            \\\"flags\\\": 3,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 0,\\r\\n                            \\\"end\\\": 34\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 0,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 3,\\r\\n                    \\\"end\\\": 34\\r\\n                },\\r\\n                \\\"flags\\\": 0,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 0,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 34\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 34\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [\\r\\n        {\\r\\n            \\\"kind\\\": 2,\\r\\n            \\\"source\\\": 2,\\r\\n            \\\"message\\\": \\\"';' expected.\\\",\\r\\n            \\\"start\\\": 27,\\r\\n            \\\"length\\\": 0\\r\\n        }\\r\\n    ],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 34\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 125,\n                        \"end\": 6611\n                    },\n                    \"flags\": 256,\n                    \"start\": 113,\n                    \"end\": 6611\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 6611,\n                    \"end\": 6613\n                },\n                \"flags\": 256,\n                \"start\": 113,\n                \"end\": 6613\n            },\n            \"flags\": 128,\n            \"start\": 113,\n            \"end\": 6613\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 6620,\n                            \"end\": 6628\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 6628,\n                            \"end\": 6636\n                        },\n                        \"flags\": 256,\n                        \"start\": 6620,\n                        \"end\": 6636\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 6636,\n                        \"end\": 6677\n                    },\n                    \"flags\": 256,\n                    \"start\": 6620,\n                    \"end\": 6677\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 6677,\n                    \"end\": 6679\n                },\n                \"flags\": 256,\n                \"start\": 6620,\n                \"end\": 6679\n            },\n            \"flags\": 128,\n            \"start\": 6620,\n            \"end\": 6679\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 6686,\n                            \"end\": 6698\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 6698,\n                            \"end\": 6706\n                        },\n                        \"flags\": 256,\n                        \"start\": 6686,\n                        \"end\": 6706\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 6706,\n                        \"end\": 6722\n                    },\n                    \"flags\": 256,\n                    \"start\": 6686,\n                    \"end\": 6722\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 6722,\n                    \"end\": 6724\n                },\n                \"flags\": 256,\n                \"start\": 6686,\n                \"end\": 6724\n            },\n            \"flags\": 128,\n            \"start\": 6686,\n            \"end\": 6724\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n`````js\\r\\nvar v = () => {\\r\\n     yield foo\\r\\n  }\\r\\n`````\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n```javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"var v = () => {\\\\n     yield foo\\\\n  }\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 2097397,\\r\\n                \\\"declarationList\\\": {\\r\\n                    \\\"kind\\\": 244,\\r\\n                    \\\"declarations\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 243,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"v\\\",\\r\\n                                \\\"rawText\\\": \\\"v\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 3,\\r\\n                                \\\"end\\\": 5\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": null,\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 67592,\\r\\n                                \\\"typeParameters\\\": null,\\r\\n                                \\\"arrowParameters\\\": {\\r\\n                                    \\\"kind\\\": 65545,\\r\\n                                    \\\"elements\\\": [],\\r\\n                                    \\\"type\\\": null,\\r\\n                                    \\\"accessModifier\\\": null,\\r\\n                                    \\\"trailingComma\\\": false,\\r\\n                                    \\\"flags\\\": 0,\\r\\n                                    \\\"intersects\\\": false,\\r\\n                                    \\\"transformFlags\\\": 0,\\r\\n                                    \\\"start\\\": 7,\\r\\n                                    \\\"end\\\": 7\\r\\n                                },\\r\\n                                \\\"contents\\\": {\\r\\n                                    \\\"kind\\\": 91,\\r\\n                                    \\\"functionStatementList\\\": {\\r\\n                                        \\\"kind\\\": 94,\\r\\n                                        \\\"statements\\\": [\\r\\n                                            {\\r\\n                                                \\\"kind\\\": 2097233,\\r\\n                                                \\\"expression\\\": {\\r\\n                                                    \\\"kind\\\": 196712,\\r\\n                                                    \\\"text\\\": \\\"yield\\\",\\r\\n                                                    \\\"rawText\\\": \\\"yield\\\",\\r\\n                                                    \\\"flags\\\": 16384,\\r\\n                                                    \\\"intersects\\\": false,\\r\\n                                                    \\\"transformFlags\\\": 0,\\r\\n                                                    \\\"start\\\": 15,\\r\\n                                                    \\\"end\\\": 26\\r\\n                                                },\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 15,\\r\\n                                                \\\"end\\\": 26\\r\\n                                            },\\r\\n                                            {\\r\\n                                                \\\"kind\\\": 2097233,\\r\\n                                                \\\"expression\\\": {\\r\\n                                                    \\\"kind\\\": 196712,\\r\\n                                                    \\\"text\\\": \\\"foo\\\",\\r\\n                                                    \\\"rawText\\\": \\\"foo\\\",\\r\\n                                                    \\\"flags\\\": 2,\\r\\n                                                    \\\"intersects\\\": false,\\r\\n                                                    \\\"transformFlags\\\": 0,\\r\\n                                                    \\\"start\\\": 26,\\r\\n                                                    \\\"end\\\": 30\\r\\n                                                },\\r\\n                                                \\\"flags\\\": 0,\\r\\n                                                \\\"intersects\\\": false,\\r\\n                                                \\\"transformFlags\\\": 0,\\r\\n                                                \\\"start\\\": 26,\\r\\n                                                \\\"end\\\": 30\\r\\n                                            }\\r\\n                                        ],\\r\\n                                        \\\"multiline\\\": true,\\r\\n                                        \\\"flags\\\": 16384,\\r\\n                                        \\\"intersects\\\": false,\\r\\n                                        \\\"transformFlags\\\": 0,\\r\\n                                        \\\"start\\\": 15,\\r\\n                                        \\\"end\\\": 30\\r\\n                                    },\\r\\n                                    \\\"flags\\\": 0,\\r\\n                                    \\\"intersects\\\": false,\\r\\n                                    \\\"transformFlags\\\": 0,\\r\\n                                    \\\"start\\\": 13,\\r\\n                                    \\\"end\\\": 34\\r\\n                                },\\r\\n                                \\\"flags\\\": 536870912,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 7,\\r\\n                                \\\"end\\\": 34\\r\\n                            },\\r\\n                            \\\"flags\\\": 3,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 0,\\r\\n                            \\\"end\\\": 34\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 0,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 3,\\r\\n                    \\\"end\\\": 34\\r\\n                },\\r\\n                \\\"flags\\\": 0,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 0,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 34\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 34\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [\\r\\n        {\\r\\n            \\\"kind\\\": 2,\\r\\n            \\\"source\\\": 2,\\r\\n            \\\"message\\\": \\\"';' expected.\\\",\\r\\n            \\\"start\\\": 27,\\r\\n            \\\"length\\\": 0\\r\\n        }\\r\\n    ],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 34\\r\\n}\\r\\n```\\r\\n\\r\\n### Printed\\r\\n\\r\\n\\r\\n```javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n```\\r\\n\\r\\n### Diagnostics\\r\\n\\r\\n\\r\\n```javascript\\r\\n\\r\\n```\\r\\n\\r\",\n    \"fileName\": \"__root__\",\n    \"flags\": 0,\n    \"diagnostics\": [\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 5,\n            \"error\": \"Statement expected\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 84,\n            \"end\": 89\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 84,\n            \"end\": 89\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 89,\n            \"end\": 90\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 89,\n            \"end\": 90\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 97,\n            \"end\": 104\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 97,\n            \"end\": 104\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 104,\n            \"end\": 105\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 104,\n            \"end\": 105\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 105,\n            \"end\": 106\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 105,\n            \"end\": 106\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 113,\n            \"end\": 117\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6613,\n            \"end\": 6618\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 6613,\n            \"end\": 6618\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6618,\n            \"end\": 6619\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 6618,\n            \"end\": 6619\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6619,\n            \"end\": 6620\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 6619,\n            \"end\": 6620\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6679,\n            \"end\": 6684\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 6679,\n            \"end\": 6684\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6684,\n            \"end\": 6685\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 6684,\n            \"end\": 6685\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6685,\n            \"end\": 6686\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 6685,\n            \"end\": 6686\n        }\n    ],\n    \"start\": 0,\n    \"end\": 6727\n}\n```\n\n### Printed\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\nvar v = () => {\r\n     yield foo\r\n  }\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = () => {\\n     yield foo\\n  }\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67592,\r\n                                \"typeParameters\": null,\r\n                                \"arrowParameters\": {\r\n                                    \"kind\": 65545,\r\n                                    \"elements\": [],\r\n                                    \"type\": null,\r\n                                    \"accessModifier\": null,\r\n                                    \"trailingComma\": false,\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 7,\r\n                                    \"end\": 7\r\n                                },\r\n                                \"contents\": {\r\n                                    \"kind\": 91,\r\n                                    \"functionStatementList\": {\r\n                                        \"kind\": 94,\r\n                                        \"statements\": [\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"yield\",\r\n                                                    \"rawText\": \"yield\",\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 15,\r\n                                                    \"end\": 26\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 15,\r\n                                                \"end\": 26\r\n                                            },\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"foo\",\r\n                                                    \"rawText\": \"foo\",\r\n                                                    \"flags\": 2,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 26,\r\n                                                    \"end\": 30\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 26,\r\n                                                \"end\": 30\r\n                                            }\r\n                                        ],\r\n                                        \"multiline\": true,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 0,\r\n                                        \"start\": 15,\r\n                                        \"end\": 30\r\n                                    },\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 34\r\n                                },\r\n                                \"flags\": 536870912,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 34\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 34\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 34\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 34\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [\r\n        {\r\n            \"kind\": 2,\r\n            \"source\": 2,\r\n            \"message\": \"';' expected.\",\r\n            \"start\": 27,\r\n            \"length\": 0\r\n        }\r\n    ],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 34\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n\n### Diagnostics\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\nvar v = () => {\r\n     yield foo\r\n  }\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"var v = () => {\\n     yield foo\\n  }\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097397,\r\n                \"declarationList\": {\r\n                    \"kind\": 244,\r\n                    \"declarations\": [\r\n                        {\r\n                            \"kind\": 243,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"v\",\r\n                                \"rawText\": \"v\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": {\r\n                                \"kind\": 67592,\r\n                                \"typeParameters\": null,\r\n                                \"arrowParameters\": {\r\n                                    \"kind\": 65545,\r\n                                    \"elements\": [],\r\n                                    \"type\": null,\r\n                                    \"accessModifier\": null,\r\n                                    \"trailingComma\": false,\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 7,\r\n                                    \"end\": 7\r\n                                },\r\n                                \"contents\": {\r\n                                    \"kind\": 91,\r\n                                    \"functionStatementList\": {\r\n                                        \"kind\": 94,\r\n                                        \"statements\": [\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"yield\",\r\n                                                    \"rawText\": \"yield\",\r\n                                                    \"flags\": 16384,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 15,\r\n                                                    \"end\": 26\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 15,\r\n                                                \"end\": 26\r\n                                            },\r\n                                            {\r\n                                                \"kind\": 2097233,\r\n                                                \"expression\": {\r\n                                                    \"kind\": 196712,\r\n                                                    \"text\": \"foo\",\r\n                                                    \"rawText\": \"foo\",\r\n                                                    \"flags\": 2,\r\n                                                    \"intersects\": false,\r\n                                                    \"transformFlags\": 0,\r\n                                                    \"start\": 26,\r\n                                                    \"end\": 30\r\n                                                },\r\n                                                \"flags\": 0,\r\n                                                \"intersects\": false,\r\n                                                \"transformFlags\": 0,\r\n                                                \"start\": 26,\r\n                                                \"end\": 30\r\n                                            }\r\n                                        ],\r\n                                        \"multiline\": true,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 0,\r\n                                        \"start\": 15,\r\n                                        \"end\": 30\r\n                                    },\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 34\r\n                                },\r\n                                \"flags\": 536870912,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 7,\r\n                                \"end\": 34\r\n                            },\r\n                            \"flags\": 3,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 0,\r\n                            \"end\": 34\r\n                        }\r\n                    ],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 34\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 34\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [\r\n        {\r\n            \"kind\": 2,\r\n            \"source\": 2,\r\n            \"message\": \"';' expected.\",\r\n            \"start\": 27,\r\n            \"length\": 0\r\n        }\r\n    ],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 34\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n",
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
            "start": 84,
            "end": 89
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 84,
            "end": 89
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 89,
            "end": 90
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 89,
            "end": 90
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 97,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 97,
            "end": 104
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 104,
            "end": 105
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 104,
            "end": 105
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 105,
            "end": 106
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 105,
            "end": 106
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 113,
            "end": 117
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6613,
            "end": 6618
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6613,
            "end": 6618
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6618,
            "end": 6619
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6618,
            "end": 6619
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6619,
            "end": 6620
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6619,
            "end": 6620
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6679,
            "end": 6684
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6679,
            "end": 6684
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6684,
            "end": 6685
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6684,
            "end": 6685
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6685,
            "end": 6686
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6685,
            "end": 6686
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6724,
            "end": 6730
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6724,
            "end": 6730
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6730,
            "end": 6731
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6730,
            "end": 6731
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6738,
            "end": 6741
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6738,
            "end": 6741
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6741,
            "end": 6742
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6741,
            "end": 6742
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6742,
            "end": 6743
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 6742,
            "end": 6743
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6750,
            "end": 6754
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30956,
            "end": 30958
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30956,
            "end": 30958
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30958,
            "end": 30958
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30958,
            "end": 30959
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30958,
            "end": 30959
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30959,
            "end": 30960
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30960,
            "end": 30960
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30960,
            "end": 30961
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30960,
            "end": 30961
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30965,
            "end": 30967
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30977,
            "end": 30977
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30977,
            "end": 30978
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30977,
            "end": 30978
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30977,
            "end": 30978
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30978,
            "end": 30979
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30979,
            "end": 30979
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30979,
            "end": 30980
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30979,
            "end": 30980
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30981,
            "end": 30991
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30991,
            "end": 30995
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30991,
            "end": 30995
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30995,
            "end": 30995
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30995,
            "end": 30996
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30995,
            "end": 30996
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30996,
            "end": 30997
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 30997,
            "end": 30997
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 30997,
            "end": 30998
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30997,
            "end": 30998
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 30999,
            "end": 31002
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31002,
            "end": 31002
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31002,
            "end": 31003
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31003,
            "end": 31004
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31004,
            "end": 31004
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31004,
            "end": 31005
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31004,
            "end": 31005
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31069,
            "end": 31079
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31069,
            "end": 31079
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31079,
            "end": 31079
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31079,
            "end": 31080
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31079,
            "end": 31080
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31080,
            "end": 31081
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31081,
            "end": 31081
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31081,
            "end": 31082
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31081,
            "end": 31082
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31083,
            "end": 31084
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31084,
            "end": 31084
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31084,
            "end": 31085
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31084,
            "end": 31085
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31085,
            "end": 31086
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31086,
            "end": 31086
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31086,
            "end": 31087
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31086,
            "end": 31087
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 31088,
            "end": 31092
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31088,
            "end": 31093
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31088,
            "end": 31093
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38274,
            "end": 38275
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 38274,
            "end": 38275
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38299,
            "end": 38300
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 38299,
            "end": 38300
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 38321,
            "end": 38322
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 38321,
            "end": 38322
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44352,
            "end": 44353
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 44352,
            "end": 44353
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44366,
            "end": 44367
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 44366,
            "end": 44367
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 44372,
            "end": 44374
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44396,
            "end": 44406
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44412,
            "end": 44417
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 44412,
            "end": 44417
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44417,
            "end": 44422
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 44417,
            "end": 44422
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44422,
            "end": 44423
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 44422,
            "end": 44423
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44485,
            "end": 44490
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 44485,
            "end": 44490
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44490,
            "end": 44491
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 44490,
            "end": 44491
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44498,
            "end": 44505
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 44498,
            "end": 44505
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44505,
            "end": 44506
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 44505,
            "end": 44506
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44506,
            "end": 44507
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 44506,
            "end": 44507
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 44514,
            "end": 44518
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51014,
            "end": 51019
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51014,
            "end": 51019
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51019,
            "end": 51020
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51019,
            "end": 51020
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51020,
            "end": 51021
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51020,
            "end": 51021
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51080,
            "end": 51085
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51080,
            "end": 51085
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51085,
            "end": 51086
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51085,
            "end": 51086
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51086,
            "end": 51087
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51086,
            "end": 51087
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51154,
            "end": 51164
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51170,
            "end": 51175
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 51170,
            "end": 51175
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51175,
            "end": 51180
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51175,
            "end": 51180
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51180,
            "end": 51181
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51180,
            "end": 51181
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51243,
            "end": 51248
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51243,
            "end": 51248
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51248,
            "end": 51249
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51248,
            "end": 51249
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51256,
            "end": 51263
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51256,
            "end": 51263
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51263,
            "end": 51264
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51263,
            "end": 51264
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51264,
            "end": 51265
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 51264,
            "end": 51265
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 51272,
            "end": 51276
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57772,
            "end": 57777
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 57772,
            "end": 57777
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57777,
            "end": 57778
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 57777,
            "end": 57778
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57778,
            "end": 57779
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 57778,
            "end": 57779
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57838,
            "end": 57843
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 57838,
            "end": 57843
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57843,
            "end": 57844
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 57843,
            "end": 57844
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57844,
            "end": 57845
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 57844,
            "end": 57845
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 57889,
            "end": 57891
        }
    ],
    "start": 0,
    "end": 57891
}
```

### Printed

```javascript
 test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
var v = () => {@{xd}@
     yield foo@{xd}@
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
    "source": "var v = () => {\n     yield foo\n  }",@{xd}@
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
                                "kind": 67592,@{xd}@
                                "typeParameters": null,@{xd}@
                                "arrowParameters": {@{xd}@
                                    "kind": 65545,@{xd}@
                                    "elements": [],@{xd}@
                                    "type": null,@{xd}@
                                    "accessModifier": null,@{xd}@
                                    "trailingComma": false,@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 7,@{xd}@
                                    "end": 7@{xd}@
                                },@{xd}@
                                "contents": {@{xd}@
                                    "kind": 91,@{xd}@
                                    "functionStatementList": {@{xd}@
                                        "kind": 94,@{xd}@
                                        "statements": [@{xd}@
                                            {@{xd}@
                                                "kind": 2097233,@{xd}@
                                                "expression": {@{xd}@
                                                    "kind": 196712,@{xd}@
                                                    "text": "yield",@{xd}@
                                                    "rawText": "yield",@{xd}@
                                                    "flags": 16384,@{xd}@
                                                    "intersects": false,@{xd}@
                                                    "transformFlags": 0,@{xd}@
                                                    "start": 15,@{xd}@
                                                    "end": 26@{xd}@
                                                },@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 15,@{xd}@
                                                "end": 26@{xd}@
                                            },@{xd}@
                                            {@{xd}@
                                                "kind": 2097233,@{xd}@
                                                "expression": {@{xd}@
                                                    "kind": 196712,@{xd}@
                                                    "text": "foo",@{xd}@
                                                    "rawText": "foo",@{xd}@
                                                    "flags": 2,@{xd}@
                                                    "intersects": false,@{xd}@
                                                    "transformFlags": 0,@{xd}@
                                                    "start": 26,@{xd}@
                                                    "end": 30@{xd}@
                                                },@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 26,@{xd}@
                                                "end": 30@{xd}@
                                            }@{xd}@
                                        ],@{xd}@
                                        "multiline": true,@{xd}@
                                        "flags": 16384,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 0,@{xd}@
                                        "start": 15,@{xd}@
                                        "end": 30@{xd}@
                                    },@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 13,@{xd}@
                                    "end": 34@{xd}@
                                },@{xd}@
                                "flags": 536870912,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 7,@{xd}@
                                "end": 34@{xd}@
                            },@{xd}@
                            "flags": 3,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 0,@{xd}@
                            "end": 34@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 3,@{xd}@
                    "end": 34@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 0,@{xd}@
                "end": 34@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 34@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [@{xd}@
        {@{xd}@
            "kind": 2,@{xd}@
            "source": 2,@{xd}@
            "message": "';' expected.",@{xd}@
            "start": 27,@{xd}@
            "length": 0@{xd}@
        }@{xd}@
    ],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 34@{xd}@
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
var v = () => {@{xd}@
     yield foo@{xd}@
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
    "source": "var v = () => {\n     yield foo\n  }",@{xd}@
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
                                "kind": 67592,@{xd}@
                                "typeParameters": null,@{xd}@
                                "arrowParameters": {@{xd}@
                                    "kind": 65545,@{xd}@
                                    "elements": [],@{xd}@
                                    "type": null,@{xd}@
                                    "accessModifier": null,@{xd}@
                                    "trailingComma": false,@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 7,@{xd}@
                                    "end": 7@{xd}@
                                },@{xd}@
                                "contents": {@{xd}@
                                    "kind": 91,@{xd}@
                                    "functionStatementList": {@{xd}@
                                        "kind": 94,@{xd}@
                                        "statements": [@{xd}@
                                            {@{xd}@
                                                "kind": 2097233,@{xd}@
                                                "expression": {@{xd}@
                                                    "kind": 196712,@{xd}@
                                                    "text": "yield",@{xd}@
                                                    "rawText": "yield",@{xd}@
                                                    "flags": 16384,@{xd}@
                                                    "intersects": false,@{xd}@
                                                    "transformFlags": 0,@{xd}@
                                                    "start": 15,@{xd}@
                                                    "end": 26@{xd}@
                                                },@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 15,@{xd}@
                                                "end": 26@{xd}@
                                            },@{xd}@
                                            {@{xd}@
                                                "kind": 2097233,@{xd}@
                                                "expression": {@{xd}@
                                                    "kind": 196712,@{xd}@
                                                    "text": "foo",@{xd}@
                                                    "rawText": "foo",@{xd}@
                                                    "flags": 2,@{xd}@
                                                    "intersects": false,@{xd}@
                                                    "transformFlags": 0,@{xd}@
                                                    "start": 26,@{xd}@
                                                    "end": 30@{xd}@
                                                },@{xd}@
                                                "flags": 0,@{xd}@
                                                "intersects": false,@{xd}@
                                                "transformFlags": 0,@{xd}@
                                                "start": 26,@{xd}@
                                                "end": 30@{xd}@
                                            }@{xd}@
                                        ],@{xd}@
                                        "multiline": true,@{xd}@
                                        "flags": 16384,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 0,@{xd}@
                                        "start": 15,@{xd}@
                                        "end": 30@{xd}@
                                    },@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 13,@{xd}@
                                    "end": 34@{xd}@
                                },@{xd}@
                                "flags": 536870912,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 7,@{xd}@
                                "end": 34@{xd}@
                            },@{xd}@
                            "flags": 3,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 0,@{xd}@
                            "end": 34@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 3,@{xd}@
                    "end": 34@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 0,@{xd}@
                "end": 34@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 34@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [@{xd}@
        {@{xd}@
            "kind": 2,@{xd}@
            "source": 2,@{xd}@
            "message": "';' expected.",@{xd}@
            "start": 27,@{xd}@
            "length": 0@{xd}@
        }@{xd}@
    ],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 34@{xd}@
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

