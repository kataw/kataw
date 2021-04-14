# Kataw parser test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
let a@{xd}@
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
    "source": "let a",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": false,@{xd}@
                "binding": {@{xd}@
                    "kind": 31,@{xd}@
                    "bindingList": [@{xd}@
                        {@{xd}@
                            "kind": 141,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "a",@{xd}@
                                "rawText": "a",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 3,@{xd}@
                                "end": 5@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": null,@{xd}@
                            "initializer": null,@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 3,@{xd}@
                            "end": 5@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 3,@{xd}@
                    "end": 5@{xd}@
                },@{xd}@
                "flags": 16,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 0,@{xd}@
                "end": 5@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 5@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 5@{xd}@
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
                            "text": "js\rlet a\r",
                            "rawText": "js\r\nlet a\r\n",
                            "flags": 768,
                            "start": 36,
                            "end": 49
                        },
                        "flags": 256,
                        "start": 22,
                        "end": 49
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 49,
                        "end": 51
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 51
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 51,
                    "end": 53
                },
                "flags": 256,
                "start": 22,
                "end": 53
            },
            "flags": 128,
            "start": 22,
            "end": 53
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 59,
                "end": 66
            },
            "flags": 128,
            "start": 59,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 75,
                "end": 82
            },
            "flags": 128,
            "start": 75,
            "end": 82
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
                            "start": 82,
                            "end": 86
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 86,
                            "end": 94
                        },
                        "flags": 256,
                        "start": 82,
                        "end": 94
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"let a\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": false,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": null,\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 3,\r                            \"end\": 5\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 5\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 5\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 5\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 5\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"let a\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": null,\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 3,\r\n                            \"end\": 5\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 5\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 5\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 5\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 5\r\n}\r\n",
                        "flags": 768,
                        "start": 94,
                        "end": 2084
                    },
                    "flags": 256,
                    "start": 82,
                    "end": 2084
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 2084,
                    "end": 2086
                },
                "flags": 256,
                "start": 82,
                "end": 2086
            },
            "flags": 128,
            "start": 82,
            "end": 2086
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
                            "start": 2093,
                            "end": 2101
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 2101,
                            "end": 2109
                        },
                        "flags": 256,
                        "start": 2093,
                        "end": 2109
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 2109,
                        "end": 2150
                    },
                    "flags": 256,
                    "start": 2093,
                    "end": 2150
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 2150,
                    "end": 2152
                },
                "flags": 256,
                "start": 2093,
                "end": 2152
            },
            "flags": 128,
            "start": 2093,
            "end": 2152
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
                            "start": 2159,
                            "end": 2171
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 2171,
                            "end": 2179
                        },
                        "flags": 256,
                        "start": 2159,
                        "end": 2179
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r\r",
                        "rawText": "javascript\r\n\r\n",
                        "flags": 768,
                        "start": 2179,
                        "end": 2195
                    },
                    "flags": 256,
                    "start": 2159,
                    "end": 2195
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 2195,
                    "end": 2197
                },
                "flags": 256,
                "start": 2159,
                "end": 2197
            },
            "flags": 128,
            "start": 2159,
            "end": 2197
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 2204,
                "end": 2211
            },
            "flags": 128,
            "start": 2204,
            "end": 2211
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 2216,
                "end": 2223
            },
            "flags": 128,
            "start": 2216,
            "end": 2223
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
                                "start": 2223,
                                "end": 2227
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 2227,
                                "end": 2231
                            },
                            "flags": 256,
                            "start": 2223,
                            "end": 2231
                        },
                        "template": {
                            "kind": 458761,
                            "text": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\rlet a\r\",\n                            \"rawText\": \"js\r\nlet a\r\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 49\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 49\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 49,\n                        \"end\": 51\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 51\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 51,\n                    \"end\": 53\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 53\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 53\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 59,\n                \"end\": 66\n            },\n            \"flags\": 128,\n            \"start\": 59,\n            \"end\": 66\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 75,\n                \"end\": 82\n            },\n            \"flags\": 128,\n            \"start\": 75,\n            \"end\": 82\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 82,\n                            \"end\": 86\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 86,\n                            \"end\": 94\n                        },\n                        \"flags\": 256,\n                        \"start\": 82,\n                        \"end\": 94\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r{\r    \"kind\": 196,\r    \"source\": \"let a\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": false,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": null,\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 3,\r                            \"end\": 5\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 5\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 5\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 5\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 5\r}\r\",\n                        \"rawText\": \"javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"let a\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": null,\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 3,\r\n                            \"end\": 5\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 5\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 5\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 5\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 5\r\n}\r\n\",\n                        \"flags\": 768,\n                        \"start\": 94,\n                        \"end\": 2084\n                    },\n                    \"flags\": 256,\n                    \"start\": 82,\n                    \"end\": 2084\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2084,\n                    \"end\": 2086\n                },\n                \"flags\": 256,\n                \"start\": 82,\n                \"end\": 2086\n            },\n            \"flags\": 128,\n            \"start\": 82,\n            \"end\": 2086\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 2093,\n                            \"end\": 2101\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2101,\n                            \"end\": 2109\n                        },\n                        \"flags\": 256,\n                        \"start\": 2093,\n                        \"end\": 2109\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r@{x2716}@ Soon to be open sourced\r\",\n                        \"rawText\": \"javascript\r\n@{x2716}@ Soon to be open sourced\r\n\",\n                        \"flags\": 768,\n                        \"start\": 2109,\n                        \"end\": 2150\n                    },\n                    \"flags\": 256,\n                    \"start\": 2093,\n                    \"end\": 2150\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2150,\n                    \"end\": 2152\n                },\n                \"flags\": 256,\n                \"start\": 2093,\n                \"end\": 2152\n            },\n            \"flags\": 128,\n            \"start\": 2093,\n            \"end\": 2152\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 2159,\n                            \"end\": 2171\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2171,\n                            \"end\": 2179\n                        },\n                        \"flags\": 256,\n                        \"start\": 2159,\n                        \"end\": 2179\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r\r\",\n                        \"rawText\": \"javascript\r\n\r\n\",\n                        \"flags\": 768,\n                        \"start\": 2179,\n                        \"end\": 2195\n                    },\n                    \"flags\": 256,\n                    \"start\": 2159,\n                    \"end\": 2195\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2195,\n                    \"end\": 2197\n                },\n                \"flags\": 256,\n                \"start\": 2159,\n                \"end\": 2197\n            },\n            \"flags\": 128,\n            \"start\": 2159,\n            \"end\": 2197\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\r\n\r\n## Input\r\n\r\n",
                            "rawText": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\rlet a\\r\",\n                            \"rawText\": \"js\\r\\nlet a\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 49\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 49\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 49,\n                        \"end\": 51\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 51\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 51,\n                    \"end\": 53\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 53\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 53\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 59,\n                \"end\": 66\n            },\n            \"flags\": 128,\n            \"start\": 59,\n            \"end\": 66\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 75,\n                \"end\": 82\n            },\n            \"flags\": 128,\n            \"start\": 75,\n            \"end\": 82\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 82,\n                            \"end\": 86\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 86,\n                            \"end\": 94\n                        },\n                        \"flags\": 256,\n                        \"start\": 82,\n                        \"end\": 94\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\"let a\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 142,\\r                \\\"isConst\\\": false,\\r                \\\"binding\\\": {\\r                    \\\"kind\\\": 31,\\r                    \\\"bindingList\\\": [\\r                        {\\r                            \\\"kind\\\": 141,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"a\\\",\\r                                \\\"rawText\\\": \\\"a\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 3,\\r                                \\\"end\\\": 5\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": null,\\r                            \\\"initializer\\\": null,\\r                            \\\"flags\\\": 0,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 3,\\r                            \\\"end\\\": 5\\r                        }\\r                    ],\\r                    \\\"flags\\\": 16,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 3,\\r                    \\\"end\\\": 5\\r                },\\r                \\\"flags\\\": 16,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 769,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 5\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 5\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 5\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"let a\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 142,\\r\\n                \\\"isConst\\\": false,\\r\\n                \\\"binding\\\": {\\r\\n                    \\\"kind\\\": 31,\\r\\n                    \\\"bindingList\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 141,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"a\\\",\\r\\n                                \\\"rawText\\\": \\\"a\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 3,\\r\\n                                \\\"end\\\": 5\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": null,\\r\\n                            \\\"initializer\\\": null,\\r\\n                            \\\"flags\\\": 0,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 3,\\r\\n                            \\\"end\\\": 5\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 16,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 3,\\r\\n                    \\\"end\\\": 5\\r\\n                },\\r\\n                \\\"flags\\\": 16,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 769,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 5\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 5\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 5\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 94,\n                        \"end\": 2084\n                    },\n                    \"flags\": 256,\n                    \"start\": 82,\n                    \"end\": 2084\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2084,\n                    \"end\": 2086\n                },\n                \"flags\": 256,\n                \"start\": 82,\n                \"end\": 2086\n            },\n            \"flags\": 128,\n            \"start\": 82,\n            \"end\": 2086\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 2093,\n                            \"end\": 2101\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2101,\n                            \"end\": 2109\n                        },\n                        \"flags\": 256,\n                        \"start\": 2093,\n                        \"end\": 2109\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2109,\n                        \"end\": 2150\n                    },\n                    \"flags\": 256,\n                    \"start\": 2093,\n                    \"end\": 2150\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2150,\n                    \"end\": 2152\n                },\n                \"flags\": 256,\n                \"start\": 2093,\n                \"end\": 2152\n            },\n            \"flags\": 128,\n            \"start\": 2093,\n            \"end\": 2152\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 2159,\n                            \"end\": 2171\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2171,\n                            \"end\": 2179\n                        },\n                        \"flags\": 256,\n                        \"start\": 2159,\n                        \"end\": 2179\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2179,\n                        \"end\": 2195\n                    },\n                    \"flags\": 256,\n                    \"start\": 2159,\n                    \"end\": 2195\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2195,\n                    \"end\": 2197\n                },\n                \"flags\": 256,\n                \"start\": 2159,\n                \"end\": 2197\n            },\n            \"flags\": 128,\n            \"start\": 2159,\n            \"end\": 2197\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n",
                            "flags": 768,
                            "start": 2231,
                            "end": 16895
                        },
                        "flags": 256,
                        "start": 2223,
                        "end": 16895
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 16895,
                        "end": 16897
                    },
                    "flags": 256,
                    "start": 2223,
                    "end": 16897
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 16897,
                    "end": 16899
                },
                "flags": 256,
                "start": 2223,
                "end": 16899
            },
            "flags": 128,
            "start": 2223,
            "end": 16899
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "js",
                "rawText": "js",
                "flags": 768,
                "start": 16899,
                "end": 16901
            },
            "flags": 128,
            "start": 16899,
            "end": 16901
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 16902,
                "end": 16903
            },
            "flags": 128,
            "start": 16902,
            "end": 16903
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "nlet",
                "rawText": "nlet",
                "flags": 768,
                "start": 16904,
                "end": 16908
            },
            "flags": 128,
            "start": 16904,
            "end": 16908
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 16908,
                "end": 16910
            },
            "flags": 128,
            "start": 16908,
            "end": 16910
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 16911,
                "end": 16912
            },
            "flags": 128,
            "start": 16911,
            "end": 16912
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
                                "start": 16913,
                                "end": 16914
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 16914,
                                "end": 16916
                            },
                            "flags": 256,
                            "start": 16913,
                            "end": 16916
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 16916,
                            "end": 16918
                        },
                        "flags": 256,
                        "start": 16913,
                        "end": 16918
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n",
                        "rawText": "\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n",
                        "flags": 768,
                        "start": 16918,
                        "end": 16975
                    },
                    "flags": 256,
                    "start": 16913,
                    "end": 16975
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 16975,
                    "end": 16977
                },
                "flags": 256,
                "start": 16913,
                "end": 16977
            },
            "flags": 128,
            "start": 16913,
            "end": 16977
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 16977,
                "end": 16987
            },
            "flags": 128,
            "start": 16977,
            "end": 16987
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 16988,
                "end": 16989
            },
            "flags": 128,
            "start": 16988,
            "end": 16989
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 16990,
                "end": 16991
            },
            "flags": 128,
            "start": 16990,
            "end": 16991
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 16992,
                "end": 16992
            },
            "flags": 128,
            "start": 16991,
            "end": 16992
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 16993,
                "end": 16994
            },
            "flags": 128,
            "start": 16993,
            "end": 16994
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 16995,
                "end": 16996
            },
            "flags": 128,
            "start": 16995,
            "end": 16996
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392131,
                        "text": "kind\": 196,\r\n    \"source\": \"let a\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": null,\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 3,\r\n                            \"end\": 5\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 5\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 5\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 5\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 5\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "rawText": "kind\": 196,\r\n    \"source\": \"let a\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": null,\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 3,\r\n                            \"end\": 5\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 5\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 5\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 5\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 5\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "flags": 768,
                        "start": 17001,
                        "end": 19358
                    },
                    {
                        "kind": 201392131,
                        "text": "fileName",
                        "rawText": "fileName",
                        "flags": 769,
                        "start": 19359,
                        "end": 19374
                    }
                ],
                "flags": 256,
                "start": 17001,
                "end": 19374
            },
            "flags": 128,
            "start": 17001,
            "end": 19374
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
                        "start": 19375,
                        "end": 19386
                    },
                    {
                        "kind": 201392131,
                        "text": "flags",
                        "rawText": "flags",
                        "flags": 769,
                        "start": 19387,
                        "end": 19399
                    }
                ],
                "flags": 256,
                "start": 19375,
                "end": 19399
            },
            "flags": 128,
            "start": 19375,
            "end": 19399
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
                        "start": 19400,
                        "end": 19402
                    },
                    {
                        "kind": 201392131,
                        "text": "diagnostics",
                        "rawText": "diagnostics",
                        "flags": 769,
                        "start": 19403,
                        "end": 19421
                    }
                ],
                "flags": 256,
                "start": 19400,
                "end": 19421
            },
            "flags": 128,
            "start": 19400,
            "end": 19421
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
                                                    "start": 19454,
                                                    "end": 19456
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 19434,
                                                    "end": 19453
                                                },
                                                "flags": 256,
                                                "start": 19434,
                                                "end": 19456
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 19479,
                                                    "end": 19481
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 19457,
                                                    "end": 19478
                                                },
                                                "flags": 256,
                                                "start": 19457,
                                                "end": 19481
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 19502,
                                                    "end": 19504
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 19482,
                                                    "end": 19501
                                                },
                                                "flags": 256,
                                                "start": 19482,
                                                "end": 19504
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 19526,
                                                    "end": 19546
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 19505,
                                                    "end": 19525
                                                },
                                                "flags": 256,
                                                "start": 19505,
                                                "end": 19546
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6,
                                                    "rawText": "6",
                                                    "flags": 768,
                                                    "start": 19568,
                                                    "end": 19570
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 19547,
                                                    "end": 19567
                                                },
                                                "flags": 256,
                                                "start": 19547,
                                                "end": 19570
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 19590,
                                                    "end": 19593
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 19571,
                                                    "end": 19589
                                                },
                                                "flags": 256,
                                                "start": 19571,
                                                "end": 19593
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 19434,
                                        "end": 19593
                                    },
                                    "flags": 256,
                                    "start": 19424,
                                    "end": 19603
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
                                                    "start": 19634,
                                                    "end": 19636
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 19614,
                                                    "end": 19633
                                                },
                                                "flags": 256,
                                                "start": 19614,
                                                "end": 19636
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 19659,
                                                    "end": 19661
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 19637,
                                                    "end": 19658
                                                },
                                                "flags": 256,
                                                "start": 19637,
                                                "end": 19661
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 19682,
                                                    "end": 19684
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 19662,
                                                    "end": 19681
                                                },
                                                "flags": 256,
                                                "start": 19662,
                                                "end": 19684
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 19706,
                                                    "end": 19726
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 19685,
                                                    "end": 19705
                                                },
                                                "flags": 256,
                                                "start": 19685,
                                                "end": 19726
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 19748,
                                                    "end": 19751
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 19727,
                                                    "end": 19747
                                                },
                                                "flags": 256,
                                                "start": 19727,
                                                "end": 19751
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 19771,
                                                    "end": 19774
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 19752,
                                                    "end": 19770
                                                },
                                                "flags": 256,
                                                "start": 19752,
                                                "end": 19774
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 19614,
                                        "end": 19774
                                    },
                                    "flags": 256,
                                    "start": 19604,
                                    "end": 19784
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
                                                    "start": 19815,
                                                    "end": 19817
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 19795,
                                                    "end": 19814
                                                },
                                                "flags": 256,
                                                "start": 19795,
                                                "end": 19817
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 19840,
                                                    "end": 19842
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 19818,
                                                    "end": 19839
                                                },
                                                "flags": 256,
                                                "start": 19818,
                                                "end": 19842
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 768,
                                                    "start": 19863,
                                                    "end": 19865
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 19843,
                                                    "end": 19862
                                                },
                                                "flags": 256,
                                                "start": 19843,
                                                "end": 19865
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Statement expected",
                                                    "rawText": "Statement expected",
                                                    "flags": 768,
                                                    "start": 19887,
                                                    "end": 19908
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 19866,
                                                    "end": 19886
                                                },
                                                "flags": 256,
                                                "start": 19866,
                                                "end": 19908
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 19930,
                                                    "end": 19933
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 19909,
                                                    "end": 19929
                                                },
                                                "flags": 256,
                                                "start": 19909,
                                                "end": 19933
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 19953,
                                                    "end": 19956
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 19934,
                                                    "end": 19952
                                                },
                                                "flags": 256,
                                                "start": 19934,
                                                "end": 19956
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 19795,
                                        "end": 19956
                                    },
                                    "flags": 256,
                                    "start": 19785,
                                    "end": 19966
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
                                                    "start": 19997,
                                                    "end": 19999
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 19977,
                                                    "end": 19996
                                                },
                                                "flags": 256,
                                                "start": 19977,
                                                "end": 19999
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 20022,
                                                    "end": 20024
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 20000,
                                                    "end": 20021
                                                },
                                                "flags": 256,
                                                "start": 20000,
                                                "end": 20024
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 20045,
                                                    "end": 20047
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 20025,
                                                    "end": 20044
                                                },
                                                "flags": 256,
                                                "start": 20025,
                                                "end": 20047
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 20069,
                                                    "end": 20089
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 20048,
                                                    "end": 20068
                                                },
                                                "flags": 256,
                                                "start": 20048,
                                                "end": 20089
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 20111,
                                                    "end": 20114
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 20090,
                                                    "end": 20110
                                                },
                                                "flags": 256,
                                                "start": 20090,
                                                "end": 20114
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 20134,
                                                    "end": 20137
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 20115,
                                                    "end": 20133
                                                },
                                                "flags": 256,
                                                "start": 20115,
                                                "end": 20137
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 19977,
                                        "end": 20137
                                    },
                                    "flags": 256,
                                    "start": 19967,
                                    "end": 20147
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
                                                    "start": 20178,
                                                    "end": 20180
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 20158,
                                                    "end": 20177
                                                },
                                                "flags": 256,
                                                "start": 20158,
                                                "end": 20180
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 20203,
                                                    "end": 20205
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 20181,
                                                    "end": 20202
                                                },
                                                "flags": 256,
                                                "start": 20181,
                                                "end": 20205
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 20226,
                                                    "end": 20229
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 20206,
                                                    "end": 20225
                                                },
                                                "flags": 256,
                                                "start": 20206,
                                                "end": 20229
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 20251,
                                                    "end": 20310
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 20230,
                                                    "end": 20250
                                                },
                                                "flags": 256,
                                                "start": 20230,
                                                "end": 20310
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 20332,
                                                    "end": 20335
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 20311,
                                                    "end": 20331
                                                },
                                                "flags": 256,
                                                "start": 20311,
                                                "end": 20335
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 20355,
                                                    "end": 20358
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 20336,
                                                    "end": 20354
                                                },
                                                "flags": 256,
                                                "start": 20336,
                                                "end": 20358
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 20158,
                                        "end": 20358
                                    },
                                    "flags": 256,
                                    "start": 20148,
                                    "end": 20368
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
                                                    "start": 20399,
                                                    "end": 20401
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 20379,
                                                    "end": 20398
                                                },
                                                "flags": 256,
                                                "start": 20379,
                                                "end": 20401
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 20424,
                                                    "end": 20426
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 20402,
                                                    "end": 20423
                                                },
                                                "flags": 256,
                                                "start": 20402,
                                                "end": 20426
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 20447,
                                                    "end": 20449
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 20427,
                                                    "end": 20446
                                                },
                                                "flags": 256,
                                                "start": 20427,
                                                "end": 20449
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 20471,
                                                    "end": 20491
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 20450,
                                                    "end": 20470
                                                },
                                                "flags": 256,
                                                "start": 20450,
                                                "end": 20491
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 20513,
                                                    "end": 20516
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 20492,
                                                    "end": 20512
                                                },
                                                "flags": 256,
                                                "start": 20492,
                                                "end": 20516
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 20536,
                                                    "end": 20539
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 20517,
                                                    "end": 20535
                                                },
                                                "flags": 256,
                                                "start": 20517,
                                                "end": 20539
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 20379,
                                        "end": 20539
                                    },
                                    "flags": 256,
                                    "start": 20369,
                                    "end": 20549
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
                                                    "start": 20580,
                                                    "end": 20582
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 20560,
                                                    "end": 20579
                                                },
                                                "flags": 256,
                                                "start": 20560,
                                                "end": 20582
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 20605,
                                                    "end": 20607
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 20583,
                                                    "end": 20604
                                                },
                                                "flags": 256,
                                                "start": 20583,
                                                "end": 20607
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 20628,
                                                    "end": 20631
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 20608,
                                                    "end": 20627
                                                },
                                                "flags": 256,
                                                "start": 20608,
                                                "end": 20631
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 20653,
                                                    "end": 20712
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 20632,
                                                    "end": 20652
                                                },
                                                "flags": 256,
                                                "start": 20632,
                                                "end": 20712
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 20734,
                                                    "end": 20737
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 20713,
                                                    "end": 20733
                                                },
                                                "flags": 256,
                                                "start": 20713,
                                                "end": 20737
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 20757,
                                                    "end": 20760
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 20738,
                                                    "end": 20756
                                                },
                                                "flags": 256,
                                                "start": 20738,
                                                "end": 20760
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 20560,
                                        "end": 20760
                                    },
                                    "flags": 256,
                                    "start": 20550,
                                    "end": 20770
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
                                                    "start": 20801,
                                                    "end": 20803
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 20781,
                                                    "end": 20800
                                                },
                                                "flags": 256,
                                                "start": 20781,
                                                "end": 20803
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 20826,
                                                    "end": 20828
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 20804,
                                                    "end": 20825
                                                },
                                                "flags": 256,
                                                "start": 20804,
                                                "end": 20828
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 20849,
                                                    "end": 20851
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 20829,
                                                    "end": 20848
                                                },
                                                "flags": 256,
                                                "start": 20829,
                                                "end": 20851
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 20873,
                                                    "end": 20893
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 20852,
                                                    "end": 20872
                                                },
                                                "flags": 256,
                                                "start": 20852,
                                                "end": 20893
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 53,
                                                    "rawText": "53",
                                                    "flags": 768,
                                                    "start": 20915,
                                                    "end": 20918
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 20894,
                                                    "end": 20914
                                                },
                                                "flags": 256,
                                                "start": 20894,
                                                "end": 20918
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 58,
                                                    "rawText": "58",
                                                    "flags": 768,
                                                    "start": 20938,
                                                    "end": 20941
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 20919,
                                                    "end": 20937
                                                },
                                                "flags": 256,
                                                "start": 20919,
                                                "end": 20941
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 20781,
                                        "end": 20941
                                    },
                                    "flags": 256,
                                    "start": 20771,
                                    "end": 20951
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
                                                    "start": 20982,
                                                    "end": 20984
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 20962,
                                                    "end": 20981
                                                },
                                                "flags": 256,
                                                "start": 20962,
                                                "end": 20984
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 21007,
                                                    "end": 21009
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 20985,
                                                    "end": 21006
                                                },
                                                "flags": 256,
                                                "start": 20985,
                                                "end": 21009
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 21030,
                                                    "end": 21033
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 21010,
                                                    "end": 21029
                                                },
                                                "flags": 256,
                                                "start": 21010,
                                                "end": 21033
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 21055,
                                                    "end": 21114
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 21034,
                                                    "end": 21054
                                                },
                                                "flags": 256,
                                                "start": 21034,
                                                "end": 21114
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 53,
                                                    "rawText": "53",
                                                    "flags": 768,
                                                    "start": 21136,
                                                    "end": 21139
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 21115,
                                                    "end": 21135
                                                },
                                                "flags": 256,
                                                "start": 21115,
                                                "end": 21139
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 58,
                                                    "rawText": "58",
                                                    "flags": 768,
                                                    "start": 21159,
                                                    "end": 21162
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 21140,
                                                    "end": 21158
                                                },
                                                "flags": 256,
                                                "start": 21140,
                                                "end": 21162
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 20962,
                                        "end": 21162
                                    },
                                    "flags": 256,
                                    "start": 20952,
                                    "end": 21172
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
                                                    "start": 21203,
                                                    "end": 21205
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 21183,
                                                    "end": 21202
                                                },
                                                "flags": 256,
                                                "start": 21183,
                                                "end": 21205
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 21228,
                                                    "end": 21230
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 21206,
                                                    "end": 21227
                                                },
                                                "flags": 256,
                                                "start": 21206,
                                                "end": 21230
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 21251,
                                                    "end": 21253
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 21231,
                                                    "end": 21250
                                                },
                                                "flags": 256,
                                                "start": 21231,
                                                "end": 21253
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 21275,
                                                    "end": 21295
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 21254,
                                                    "end": 21274
                                                },
                                                "flags": 256,
                                                "start": 21254,
                                                "end": 21295
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 58,
                                                    "rawText": "58",
                                                    "flags": 768,
                                                    "start": 21317,
                                                    "end": 21320
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 21296,
                                                    "end": 21316
                                                },
                                                "flags": 256,
                                                "start": 21296,
                                                "end": 21320
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 59,
                                                    "rawText": "59",
                                                    "flags": 768,
                                                    "start": 21340,
                                                    "end": 21343
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 21321,
                                                    "end": 21339
                                                },
                                                "flags": 256,
                                                "start": 21321,
                                                "end": 21343
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 21183,
                                        "end": 21343
                                    },
                                    "flags": 256,
                                    "start": 21173,
                                    "end": 21353
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
                                                    "start": 21384,
                                                    "end": 21386
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 21364,
                                                    "end": 21383
                                                },
                                                "flags": 256,
                                                "start": 21364,
                                                "end": 21386
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 21409,
                                                    "end": 21411
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 21387,
                                                    "end": 21408
                                                },
                                                "flags": 256,
                                                "start": 21387,
                                                "end": 21411
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 21432,
                                                    "end": 21435
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 21412,
                                                    "end": 21431
                                                },
                                                "flags": 256,
                                                "start": 21412,
                                                "end": 21435
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 21457,
                                                    "end": 21516
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 21436,
                                                    "end": 21456
                                                },
                                                "flags": 256,
                                                "start": 21436,
                                                "end": 21516
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 58,
                                                    "rawText": "58",
                                                    "flags": 768,
                                                    "start": 21538,
                                                    "end": 21541
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 21517,
                                                    "end": 21537
                                                },
                                                "flags": 256,
                                                "start": 21517,
                                                "end": 21541
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 59,
                                                    "rawText": "59",
                                                    "flags": 768,
                                                    "start": 21561,
                                                    "end": 21564
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 21542,
                                                    "end": 21560
                                                },
                                                "flags": 256,
                                                "start": 21542,
                                                "end": 21564
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 21364,
                                        "end": 21564
                                    },
                                    "flags": 256,
                                    "start": 21354,
                                    "end": 21574
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
                                                    "start": 21605,
                                                    "end": 21607
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 21585,
                                                    "end": 21604
                                                },
                                                "flags": 256,
                                                "start": 21585,
                                                "end": 21607
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 21630,
                                                    "end": 21632
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 21608,
                                                    "end": 21629
                                                },
                                                "flags": 256,
                                                "start": 21608,
                                                "end": 21632
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 21653,
                                                    "end": 21655
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 21633,
                                                    "end": 21652
                                                },
                                                "flags": 256,
                                                "start": 21633,
                                                "end": 21655
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 21677,
                                                    "end": 21697
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 21656,
                                                    "end": 21676
                                                },
                                                "flags": 256,
                                                "start": 21656,
                                                "end": 21697
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 66,
                                                    "rawText": "66",
                                                    "flags": 768,
                                                    "start": 21719,
                                                    "end": 21722
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 21698,
                                                    "end": 21718
                                                },
                                                "flags": 256,
                                                "start": 21698,
                                                "end": 21722
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 73,
                                                    "rawText": "73",
                                                    "flags": 768,
                                                    "start": 21742,
                                                    "end": 21745
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 21723,
                                                    "end": 21741
                                                },
                                                "flags": 256,
                                                "start": 21723,
                                                "end": 21745
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 21585,
                                        "end": 21745
                                    },
                                    "flags": 256,
                                    "start": 21575,
                                    "end": 21755
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
                                                    "start": 21786,
                                                    "end": 21788
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 21766,
                                                    "end": 21785
                                                },
                                                "flags": 256,
                                                "start": 21766,
                                                "end": 21788
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 21811,
                                                    "end": 21813
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 21789,
                                                    "end": 21810
                                                },
                                                "flags": 256,
                                                "start": 21789,
                                                "end": 21813
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 21834,
                                                    "end": 21837
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 21814,
                                                    "end": 21833
                                                },
                                                "flags": 256,
                                                "start": 21814,
                                                "end": 21837
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 21859,
                                                    "end": 21918
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 21838,
                                                    "end": 21858
                                                },
                                                "flags": 256,
                                                "start": 21838,
                                                "end": 21918
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 66,
                                                    "rawText": "66",
                                                    "flags": 768,
                                                    "start": 21940,
                                                    "end": 21943
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 21919,
                                                    "end": 21939
                                                },
                                                "flags": 256,
                                                "start": 21919,
                                                "end": 21943
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 73,
                                                    "rawText": "73",
                                                    "flags": 768,
                                                    "start": 21963,
                                                    "end": 21966
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 21944,
                                                    "end": 21962
                                                },
                                                "flags": 256,
                                                "start": 21944,
                                                "end": 21966
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 21766,
                                        "end": 21966
                                    },
                                    "flags": 256,
                                    "start": 21756,
                                    "end": 21976
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
                                                    "start": 22007,
                                                    "end": 22009
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 21987,
                                                    "end": 22006
                                                },
                                                "flags": 256,
                                                "start": 21987,
                                                "end": 22009
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 22032,
                                                    "end": 22034
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22010,
                                                    "end": 22031
                                                },
                                                "flags": 256,
                                                "start": 22010,
                                                "end": 22034
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 22055,
                                                    "end": 22057
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 22035,
                                                    "end": 22054
                                                },
                                                "flags": 256,
                                                "start": 22035,
                                                "end": 22057
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 22079,
                                                    "end": 22099
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 22058,
                                                    "end": 22078
                                                },
                                                "flags": 256,
                                                "start": 22058,
                                                "end": 22099
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 73,
                                                    "rawText": "73",
                                                    "flags": 768,
                                                    "start": 22121,
                                                    "end": 22124
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 22100,
                                                    "end": 22120
                                                },
                                                "flags": 256,
                                                "start": 22100,
                                                "end": 22124
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 74,
                                                    "rawText": "74",
                                                    "flags": 768,
                                                    "start": 22144,
                                                    "end": 22147
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 22125,
                                                    "end": 22143
                                                },
                                                "flags": 256,
                                                "start": 22125,
                                                "end": 22147
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 21987,
                                        "end": 22147
                                    },
                                    "flags": 256,
                                    "start": 21977,
                                    "end": 22157
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
                                                    "start": 22188,
                                                    "end": 22190
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 22168,
                                                    "end": 22187
                                                },
                                                "flags": 256,
                                                "start": 22168,
                                                "end": 22190
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 22213,
                                                    "end": 22215
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22191,
                                                    "end": 22212
                                                },
                                                "flags": 256,
                                                "start": 22191,
                                                "end": 22215
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 22236,
                                                    "end": 22239
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 22216,
                                                    "end": 22235
                                                },
                                                "flags": 256,
                                                "start": 22216,
                                                "end": 22239
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 22261,
                                                    "end": 22320
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 22240,
                                                    "end": 22260
                                                },
                                                "flags": 256,
                                                "start": 22240,
                                                "end": 22320
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 73,
                                                    "rawText": "73",
                                                    "flags": 768,
                                                    "start": 22342,
                                                    "end": 22345
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 22321,
                                                    "end": 22341
                                                },
                                                "flags": 256,
                                                "start": 22321,
                                                "end": 22345
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 74,
                                                    "rawText": "74",
                                                    "flags": 768,
                                                    "start": 22365,
                                                    "end": 22368
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 22346,
                                                    "end": 22364
                                                },
                                                "flags": 256,
                                                "start": 22346,
                                                "end": 22368
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 22168,
                                        "end": 22368
                                    },
                                    "flags": 256,
                                    "start": 22158,
                                    "end": 22378
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
                                                    "start": 22409,
                                                    "end": 22411
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 22389,
                                                    "end": 22408
                                                },
                                                "flags": 256,
                                                "start": 22389,
                                                "end": 22411
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 22434,
                                                    "end": 22436
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22412,
                                                    "end": 22433
                                                },
                                                "flags": 256,
                                                "start": 22412,
                                                "end": 22436
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 22457,
                                                    "end": 22459
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 22437,
                                                    "end": 22456
                                                },
                                                "flags": 256,
                                                "start": 22437,
                                                "end": 22459
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 22481,
                                                    "end": 22501
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 22460,
                                                    "end": 22480
                                                },
                                                "flags": 256,
                                                "start": 22460,
                                                "end": 22501
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 74,
                                                    "rawText": "74",
                                                    "flags": 768,
                                                    "start": 22523,
                                                    "end": 22526
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 22502,
                                                    "end": 22522
                                                },
                                                "flags": 256,
                                                "start": 22502,
                                                "end": 22526
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 75,
                                                    "rawText": "75",
                                                    "flags": 768,
                                                    "start": 22546,
                                                    "end": 22549
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 22527,
                                                    "end": 22545
                                                },
                                                "flags": 256,
                                                "start": 22527,
                                                "end": 22549
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 22389,
                                        "end": 22549
                                    },
                                    "flags": 256,
                                    "start": 22379,
                                    "end": 22559
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
                                                    "start": 22590,
                                                    "end": 22592
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 22570,
                                                    "end": 22589
                                                },
                                                "flags": 256,
                                                "start": 22570,
                                                "end": 22592
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 22615,
                                                    "end": 22617
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22593,
                                                    "end": 22614
                                                },
                                                "flags": 256,
                                                "start": 22593,
                                                "end": 22617
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 22638,
                                                    "end": 22641
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 22618,
                                                    "end": 22637
                                                },
                                                "flags": 256,
                                                "start": 22618,
                                                "end": 22641
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 22663,
                                                    "end": 22722
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 22642,
                                                    "end": 22662
                                                },
                                                "flags": 256,
                                                "start": 22642,
                                                "end": 22722
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 74,
                                                    "rawText": "74",
                                                    "flags": 768,
                                                    "start": 22744,
                                                    "end": 22747
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 22723,
                                                    "end": 22743
                                                },
                                                "flags": 256,
                                                "start": 22723,
                                                "end": 22747
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 75,
                                                    "rawText": "75",
                                                    "flags": 768,
                                                    "start": 22767,
                                                    "end": 22770
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 22748,
                                                    "end": 22766
                                                },
                                                "flags": 256,
                                                "start": 22748,
                                                "end": 22770
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 22570,
                                        "end": 22770
                                    },
                                    "flags": 256,
                                    "start": 22560,
                                    "end": 22780
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
                                                    "start": 22811,
                                                    "end": 22813
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 22791,
                                                    "end": 22810
                                                },
                                                "flags": 256,
                                                "start": 22791,
                                                "end": 22813
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 22836,
                                                    "end": 22838
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22814,
                                                    "end": 22835
                                                },
                                                "flags": 256,
                                                "start": 22814,
                                                "end": 22838
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 22859,
                                                    "end": 22861
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 22839,
                                                    "end": 22858
                                                },
                                                "flags": 256,
                                                "start": 22839,
                                                "end": 22861
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 22883,
                                                    "end": 22903
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 22862,
                                                    "end": 22882
                                                },
                                                "flags": 256,
                                                "start": 22862,
                                                "end": 22903
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 82,
                                                    "rawText": "82",
                                                    "flags": 768,
                                                    "start": 22925,
                                                    "end": 22928
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 22904,
                                                    "end": 22924
                                                },
                                                "flags": 256,
                                                "start": 22904,
                                                "end": 22928
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 86,
                                                    "rawText": "86",
                                                    "flags": 768,
                                                    "start": 22948,
                                                    "end": 22951
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 22929,
                                                    "end": 22947
                                                },
                                                "flags": 256,
                                                "start": 22929,
                                                "end": 22951
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 22791,
                                        "end": 22951
                                    },
                                    "flags": 256,
                                    "start": 22781,
                                    "end": 22961
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
                                                    "start": 22992,
                                                    "end": 22994
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 22972,
                                                    "end": 22991
                                                },
                                                "flags": 256,
                                                "start": 22972,
                                                "end": 22994
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23017,
                                                    "end": 23019
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22995,
                                                    "end": 23016
                                                },
                                                "flags": 256,
                                                "start": 22995,
                                                "end": 23019
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 23040,
                                                    "end": 23042
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23020,
                                                    "end": 23039
                                                },
                                                "flags": 256,
                                                "start": 23020,
                                                "end": 23042
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 23064,
                                                    "end": 23084
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23043,
                                                    "end": 23063
                                                },
                                                "flags": 256,
                                                "start": 23043,
                                                "end": 23084
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2086,
                                                    "rawText": "2086",
                                                    "flags": 768,
                                                    "start": 23106,
                                                    "end": 23111
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23085,
                                                    "end": 23105
                                                },
                                                "flags": 256,
                                                "start": 23085,
                                                "end": 23111
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2091,
                                                    "rawText": "2091",
                                                    "flags": 768,
                                                    "start": 23131,
                                                    "end": 23136
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23112,
                                                    "end": 23130
                                                },
                                                "flags": 256,
                                                "start": 23112,
                                                "end": 23136
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 22972,
                                        "end": 23136
                                    },
                                    "flags": 256,
                                    "start": 22962,
                                    "end": 23146
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
                                                    "start": 23177,
                                                    "end": 23179
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23157,
                                                    "end": 23176
                                                },
                                                "flags": 256,
                                                "start": 23157,
                                                "end": 23179
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23202,
                                                    "end": 23204
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23180,
                                                    "end": 23201
                                                },
                                                "flags": 256,
                                                "start": 23180,
                                                "end": 23204
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 23225,
                                                    "end": 23228
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23205,
                                                    "end": 23224
                                                },
                                                "flags": 256,
                                                "start": 23205,
                                                "end": 23228
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 23250,
                                                    "end": 23309
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23229,
                                                    "end": 23249
                                                },
                                                "flags": 256,
                                                "start": 23229,
                                                "end": 23309
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2086,
                                                    "rawText": "2086",
                                                    "flags": 768,
                                                    "start": 23331,
                                                    "end": 23336
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23310,
                                                    "end": 23330
                                                },
                                                "flags": 256,
                                                "start": 23310,
                                                "end": 23336
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2091,
                                                    "rawText": "2091",
                                                    "flags": 768,
                                                    "start": 23356,
                                                    "end": 23361
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23337,
                                                    "end": 23355
                                                },
                                                "flags": 256,
                                                "start": 23337,
                                                "end": 23361
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23157,
                                        "end": 23361
                                    },
                                    "flags": 256,
                                    "start": 23147,
                                    "end": 23371
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
                                                    "start": 23402,
                                                    "end": 23404
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23382,
                                                    "end": 23401
                                                },
                                                "flags": 256,
                                                "start": 23382,
                                                "end": 23404
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23427,
                                                    "end": 23429
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23405,
                                                    "end": 23426
                                                },
                                                "flags": 256,
                                                "start": 23405,
                                                "end": 23429
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 23450,
                                                    "end": 23452
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23430,
                                                    "end": 23449
                                                },
                                                "flags": 256,
                                                "start": 23430,
                                                "end": 23452
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 23474,
                                                    "end": 23494
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23453,
                                                    "end": 23473
                                                },
                                                "flags": 256,
                                                "start": 23453,
                                                "end": 23494
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2091,
                                                    "rawText": "2091",
                                                    "flags": 768,
                                                    "start": 23516,
                                                    "end": 23521
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23495,
                                                    "end": 23515
                                                },
                                                "flags": 256,
                                                "start": 23495,
                                                "end": 23521
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2092,
                                                    "rawText": "2092",
                                                    "flags": 768,
                                                    "start": 23541,
                                                    "end": 23546
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23522,
                                                    "end": 23540
                                                },
                                                "flags": 256,
                                                "start": 23522,
                                                "end": 23546
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23382,
                                        "end": 23546
                                    },
                                    "flags": 256,
                                    "start": 23372,
                                    "end": 23556
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
                                                    "start": 23587,
                                                    "end": 23589
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23567,
                                                    "end": 23586
                                                },
                                                "flags": 256,
                                                "start": 23567,
                                                "end": 23589
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23612,
                                                    "end": 23614
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23590,
                                                    "end": 23611
                                                },
                                                "flags": 256,
                                                "start": 23590,
                                                "end": 23614
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 23635,
                                                    "end": 23638
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23615,
                                                    "end": 23634
                                                },
                                                "flags": 256,
                                                "start": 23615,
                                                "end": 23638
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 23660,
                                                    "end": 23719
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23639,
                                                    "end": 23659
                                                },
                                                "flags": 256,
                                                "start": 23639,
                                                "end": 23719
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2091,
                                                    "rawText": "2091",
                                                    "flags": 768,
                                                    "start": 23741,
                                                    "end": 23746
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23720,
                                                    "end": 23740
                                                },
                                                "flags": 256,
                                                "start": 23720,
                                                "end": 23746
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2092,
                                                    "rawText": "2092",
                                                    "flags": 768,
                                                    "start": 23766,
                                                    "end": 23771
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23747,
                                                    "end": 23765
                                                },
                                                "flags": 256,
                                                "start": 23747,
                                                "end": 23771
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23567,
                                        "end": 23771
                                    },
                                    "flags": 256,
                                    "start": 23557,
                                    "end": 23781
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
                                                    "start": 23812,
                                                    "end": 23814
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23792,
                                                    "end": 23811
                                                },
                                                "flags": 256,
                                                "start": 23792,
                                                "end": 23814
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23837,
                                                    "end": 23839
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23815,
                                                    "end": 23836
                                                },
                                                "flags": 256,
                                                "start": 23815,
                                                "end": 23839
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 23860,
                                                    "end": 23862
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23840,
                                                    "end": 23859
                                                },
                                                "flags": 256,
                                                "start": 23840,
                                                "end": 23862
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 23884,
                                                    "end": 23904
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23863,
                                                    "end": 23883
                                                },
                                                "flags": 256,
                                                "start": 23863,
                                                "end": 23904
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2092,
                                                    "rawText": "2092",
                                                    "flags": 768,
                                                    "start": 23926,
                                                    "end": 23931
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23905,
                                                    "end": 23925
                                                },
                                                "flags": 256,
                                                "start": 23905,
                                                "end": 23931
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2093,
                                                    "rawText": "2093",
                                                    "flags": 768,
                                                    "start": 23951,
                                                    "end": 23956
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23932,
                                                    "end": 23950
                                                },
                                                "flags": 256,
                                                "start": 23932,
                                                "end": 23956
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23792,
                                        "end": 23956
                                    },
                                    "flags": 256,
                                    "start": 23782,
                                    "end": 23966
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
                                                    "start": 23997,
                                                    "end": 23999
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23977,
                                                    "end": 23996
                                                },
                                                "flags": 256,
                                                "start": 23977,
                                                "end": 23999
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24022,
                                                    "end": 24024
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24000,
                                                    "end": 24021
                                                },
                                                "flags": 256,
                                                "start": 24000,
                                                "end": 24024
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 24045,
                                                    "end": 24048
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24025,
                                                    "end": 24044
                                                },
                                                "flags": 256,
                                                "start": 24025,
                                                "end": 24048
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 24070,
                                                    "end": 24129
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24049,
                                                    "end": 24069
                                                },
                                                "flags": 256,
                                                "start": 24049,
                                                "end": 24129
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2092,
                                                    "rawText": "2092",
                                                    "flags": 768,
                                                    "start": 24151,
                                                    "end": 24156
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24130,
                                                    "end": 24150
                                                },
                                                "flags": 256,
                                                "start": 24130,
                                                "end": 24156
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2093,
                                                    "rawText": "2093",
                                                    "flags": 768,
                                                    "start": 24176,
                                                    "end": 24181
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24157,
                                                    "end": 24175
                                                },
                                                "flags": 256,
                                                "start": 24157,
                                                "end": 24181
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23977,
                                        "end": 24181
                                    },
                                    "flags": 256,
                                    "start": 23967,
                                    "end": 24191
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
                                                    "start": 24222,
                                                    "end": 24224
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24202,
                                                    "end": 24221
                                                },
                                                "flags": 256,
                                                "start": 24202,
                                                "end": 24224
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24247,
                                                    "end": 24249
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24225,
                                                    "end": 24246
                                                },
                                                "flags": 256,
                                                "start": 24225,
                                                "end": 24249
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 24270,
                                                    "end": 24272
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24250,
                                                    "end": 24269
                                                },
                                                "flags": 256,
                                                "start": 24250,
                                                "end": 24272
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 24294,
                                                    "end": 24314
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24273,
                                                    "end": 24293
                                                },
                                                "flags": 256,
                                                "start": 24273,
                                                "end": 24314
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2152,
                                                    "rawText": "2152",
                                                    "flags": 768,
                                                    "start": 24336,
                                                    "end": 24341
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24315,
                                                    "end": 24335
                                                },
                                                "flags": 256,
                                                "start": 24315,
                                                "end": 24341
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2157,
                                                    "rawText": "2157",
                                                    "flags": 768,
                                                    "start": 24361,
                                                    "end": 24366
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24342,
                                                    "end": 24360
                                                },
                                                "flags": 256,
                                                "start": 24342,
                                                "end": 24366
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24202,
                                        "end": 24366
                                    },
                                    "flags": 256,
                                    "start": 24192,
                                    "end": 24376
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
                                                    "start": 24407,
                                                    "end": 24409
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24387,
                                                    "end": 24406
                                                },
                                                "flags": 256,
                                                "start": 24387,
                                                "end": 24409
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24432,
                                                    "end": 24434
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24410,
                                                    "end": 24431
                                                },
                                                "flags": 256,
                                                "start": 24410,
                                                "end": 24434
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 24455,
                                                    "end": 24458
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24435,
                                                    "end": 24454
                                                },
                                                "flags": 256,
                                                "start": 24435,
                                                "end": 24458
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 24480,
                                                    "end": 24539
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24459,
                                                    "end": 24479
                                                },
                                                "flags": 256,
                                                "start": 24459,
                                                "end": 24539
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2152,
                                                    "rawText": "2152",
                                                    "flags": 768,
                                                    "start": 24561,
                                                    "end": 24566
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24540,
                                                    "end": 24560
                                                },
                                                "flags": 256,
                                                "start": 24540,
                                                "end": 24566
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2157,
                                                    "rawText": "2157",
                                                    "flags": 768,
                                                    "start": 24586,
                                                    "end": 24591
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24567,
                                                    "end": 24585
                                                },
                                                "flags": 256,
                                                "start": 24567,
                                                "end": 24591
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24387,
                                        "end": 24591
                                    },
                                    "flags": 256,
                                    "start": 24377,
                                    "end": 24601
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
                                                    "start": 24632,
                                                    "end": 24634
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24612,
                                                    "end": 24631
                                                },
                                                "flags": 256,
                                                "start": 24612,
                                                "end": 24634
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24657,
                                                    "end": 24659
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24635,
                                                    "end": 24656
                                                },
                                                "flags": 256,
                                                "start": 24635,
                                                "end": 24659
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 24680,
                                                    "end": 24682
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24660,
                                                    "end": 24679
                                                },
                                                "flags": 256,
                                                "start": 24660,
                                                "end": 24682
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 24704,
                                                    "end": 24724
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24683,
                                                    "end": 24703
                                                },
                                                "flags": 256,
                                                "start": 24683,
                                                "end": 24724
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2157,
                                                    "rawText": "2157",
                                                    "flags": 768,
                                                    "start": 24746,
                                                    "end": 24751
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24725,
                                                    "end": 24745
                                                },
                                                "flags": 256,
                                                "start": 24725,
                                                "end": 24751
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2158,
                                                    "rawText": "2158",
                                                    "flags": 768,
                                                    "start": 24771,
                                                    "end": 24776
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24752,
                                                    "end": 24770
                                                },
                                                "flags": 256,
                                                "start": 24752,
                                                "end": 24776
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24612,
                                        "end": 24776
                                    },
                                    "flags": 256,
                                    "start": 24602,
                                    "end": 24786
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
                                                    "start": 24817,
                                                    "end": 24819
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24797,
                                                    "end": 24816
                                                },
                                                "flags": 256,
                                                "start": 24797,
                                                "end": 24819
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24842,
                                                    "end": 24844
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24820,
                                                    "end": 24841
                                                },
                                                "flags": 256,
                                                "start": 24820,
                                                "end": 24844
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 24865,
                                                    "end": 24868
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24845,
                                                    "end": 24864
                                                },
                                                "flags": 256,
                                                "start": 24845,
                                                "end": 24868
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 24890,
                                                    "end": 24949
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24869,
                                                    "end": 24889
                                                },
                                                "flags": 256,
                                                "start": 24869,
                                                "end": 24949
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2157,
                                                    "rawText": "2157",
                                                    "flags": 768,
                                                    "start": 24971,
                                                    "end": 24976
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24950,
                                                    "end": 24970
                                                },
                                                "flags": 256,
                                                "start": 24950,
                                                "end": 24976
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2158,
                                                    "rawText": "2158",
                                                    "flags": 768,
                                                    "start": 24996,
                                                    "end": 25001
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24977,
                                                    "end": 24995
                                                },
                                                "flags": 256,
                                                "start": 24977,
                                                "end": 25001
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24797,
                                        "end": 25001
                                    },
                                    "flags": 256,
                                    "start": 24787,
                                    "end": 25011
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
                                                    "start": 25042,
                                                    "end": 25044
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25022,
                                                    "end": 25041
                                                },
                                                "flags": 256,
                                                "start": 25022,
                                                "end": 25044
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25067,
                                                    "end": 25069
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25045,
                                                    "end": 25066
                                                },
                                                "flags": 256,
                                                "start": 25045,
                                                "end": 25069
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 25090,
                                                    "end": 25092
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25070,
                                                    "end": 25089
                                                },
                                                "flags": 256,
                                                "start": 25070,
                                                "end": 25092
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 25114,
                                                    "end": 25134
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25093,
                                                    "end": 25113
                                                },
                                                "flags": 256,
                                                "start": 25093,
                                                "end": 25134
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2158,
                                                    "rawText": "2158",
                                                    "flags": 768,
                                                    "start": 25156,
                                                    "end": 25161
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25135,
                                                    "end": 25155
                                                },
                                                "flags": 256,
                                                "start": 25135,
                                                "end": 25161
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2159,
                                                    "rawText": "2159",
                                                    "flags": 768,
                                                    "start": 25181,
                                                    "end": 25186
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25162,
                                                    "end": 25180
                                                },
                                                "flags": 256,
                                                "start": 25162,
                                                "end": 25186
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25022,
                                        "end": 25186
                                    },
                                    "flags": 256,
                                    "start": 25012,
                                    "end": 25196
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
                                                    "start": 25227,
                                                    "end": 25229
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25207,
                                                    "end": 25226
                                                },
                                                "flags": 256,
                                                "start": 25207,
                                                "end": 25229
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25252,
                                                    "end": 25254
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25230,
                                                    "end": 25251
                                                },
                                                "flags": 256,
                                                "start": 25230,
                                                "end": 25254
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 25275,
                                                    "end": 25278
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25255,
                                                    "end": 25274
                                                },
                                                "flags": 256,
                                                "start": 25255,
                                                "end": 25278
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 25300,
                                                    "end": 25359
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25279,
                                                    "end": 25299
                                                },
                                                "flags": 256,
                                                "start": 25279,
                                                "end": 25359
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2158,
                                                    "rawText": "2158",
                                                    "flags": 768,
                                                    "start": 25381,
                                                    "end": 25386
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25360,
                                                    "end": 25380
                                                },
                                                "flags": 256,
                                                "start": 25360,
                                                "end": 25386
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2159,
                                                    "rawText": "2159",
                                                    "flags": 768,
                                                    "start": 25406,
                                                    "end": 25411
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25387,
                                                    "end": 25405
                                                },
                                                "flags": 256,
                                                "start": 25387,
                                                "end": 25411
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25207,
                                        "end": 25411
                                    },
                                    "flags": 256,
                                    "start": 25197,
                                    "end": 25421
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 19424,
                            "end": 25421
                        },
                        "flags": 256,
                        "start": 19422,
                        "end": 25427
                    },
                    {
                        "kind": 201392131,
                        "text": "start",
                        "rawText": "start",
                        "flags": 769,
                        "start": 25428,
                        "end": 25440
                    }
                ],
                "flags": 256,
                "start": 19422,
                "end": 25440
            },
            "flags": 128,
            "start": 19422,
            "end": 25440
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
                        "start": 25441,
                        "end": 25443
                    },
                    {
                        "kind": 201392131,
                        "text": "end",
                        "rawText": "end",
                        "flags": 769,
                        "start": 25444,
                        "end": 25454
                    }
                ],
                "flags": 256,
                "start": 25441,
                "end": 25454
            },
            "flags": 128,
            "start": 25441,
            "end": 25454
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 2200,
                "rawText": "2200",
                "flags": 768,
                "start": 25455,
                "end": 25460
            },
            "flags": 128,
            "start": 25455,
            "end": 25460
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
                        "start": 25462,
                        "end": 25465
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Printed\n\n",
                        "rawText": "\n\n### Printed\n\n",
                        "flags": 768,
                        "start": 25465,
                        "end": 25482
                    },
                    "flags": 256,
                    "start": 25462,
                    "end": 25482
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 25482,
                    "end": 25484
                },
                "flags": 256,
                "start": 25462,
                "end": 25484
            },
            "flags": 128,
            "start": 25462,
            "end": 25484
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 25484,
                "end": 25494
            },
            "flags": 128,
            "start": 25484,
            "end": 25494
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 25494,
                "end": 25500
            },
            "flags": 128,
            "start": 25494,
            "end": 25500
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
                                    "start": 25511,
                                    "end": 25517
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 25517,
                                    "end": 25523
                                },
                                "flags": 256,
                                "start": 25511,
                                "end": 25523
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 25523,
                                "end": 25525
                            },
                            "flags": 256,
                            "start": 25511,
                            "end": 25525
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rlet a\r",
                            "rawText": "js\r\nlet a\r\n",
                            "flags": 768,
                            "start": 25525,
                            "end": 25538
                        },
                        "flags": 256,
                        "start": 25511,
                        "end": 25538
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 25538,
                        "end": 25540
                    },
                    "flags": 256,
                    "start": 25511,
                    "end": 25540
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 25540,
                    "end": 25542
                },
                "flags": 256,
                "start": 25511,
                "end": 25542
            },
            "flags": 128,
            "start": 25511,
            "end": 25542
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 25548,
                "end": 25555
            },
            "flags": 128,
            "start": 25548,
            "end": 25555
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 25564,
                "end": 25571
            },
            "flags": 128,
            "start": 25564,
            "end": 25571
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
                            "start": 25571,
                            "end": 25575
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 25575,
                            "end": 25583
                        },
                        "flags": 256,
                        "start": 25571,
                        "end": 25583
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"let a\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": false,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": null,\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 3,\r                            \"end\": 5\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 5\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 5\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 5\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 5\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"let a\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": null,\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 3,\r\n                            \"end\": 5\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 5\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 5\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 5\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 5\r\n}\r\n",
                        "flags": 768,
                        "start": 25583,
                        "end": 27573
                    },
                    "flags": 256,
                    "start": 25571,
                    "end": 27573
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 27573,
                    "end": 27575
                },
                "flags": 256,
                "start": 25571,
                "end": 27575
            },
            "flags": 128,
            "start": 25571,
            "end": 27575
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
                            "start": 27582,
                            "end": 27590
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 27590,
                            "end": 27598
                        },
                        "flags": 256,
                        "start": 27582,
                        "end": 27598
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 27598,
                        "end": 27639
                    },
                    "flags": 256,
                    "start": 27582,
                    "end": 27639
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 27639,
                    "end": 27641
                },
                "flags": 256,
                "start": 27582,
                "end": 27641
            },
            "flags": 128,
            "start": 27582,
            "end": 27641
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
                                        "start": 27648,
                                        "end": 27660
                                    },
                                    "template": {
                                        "kind": 458761,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 768,
                                        "start": 27660,
                                        "end": 27668
                                    },
                                    "flags": 256,
                                    "start": 27648,
                                    "end": 27668
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "javascript\r\r",
                                    "rawText": "javascript\r\n\r\n",
                                    "flags": 768,
                                    "start": 27668,
                                    "end": 27684
                                },
                                "flags": 256,
                                "start": 27648,
                                "end": 27684
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 27684,
                                "end": 27686
                            },
                            "flags": 256,
                            "start": 27648,
                            "end": 27686
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 27686,
                            "end": 27692
                        },
                        "flags": 256,
                        "start": 27648,
                        "end": 27692
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Diagnostics\n\n",
                        "rawText": "\n\n### Diagnostics\n\n",
                        "flags": 768,
                        "start": 27692,
                        "end": 27713
                    },
                    "flags": 256,
                    "start": 27648,
                    "end": 27713
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 27713,
                    "end": 27715
                },
                "flags": 256,
                "start": 27648,
                "end": 27715
            },
            "flags": 128,
            "start": 27648,
            "end": 27715
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 27715,
                "end": 27725
            },
            "flags": 128,
            "start": 27715,
            "end": 27725
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 27725,
                "end": 27731
            },
            "flags": 128,
            "start": 27725,
            "end": 27731
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
                                    "start": 27742,
                                    "end": 27748
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 27748,
                                    "end": 27754
                                },
                                "flags": 256,
                                "start": 27742,
                                "end": 27754
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 27754,
                                "end": 27756
                            },
                            "flags": 256,
                            "start": 27742,
                            "end": 27756
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rlet a\r",
                            "rawText": "js\r\nlet a\r\n",
                            "flags": 768,
                            "start": 27756,
                            "end": 27769
                        },
                        "flags": 256,
                        "start": 27742,
                        "end": 27769
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 27769,
                        "end": 27771
                    },
                    "flags": 256,
                    "start": 27742,
                    "end": 27771
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 27771,
                    "end": 27773
                },
                "flags": 256,
                "start": 27742,
                "end": 27773
            },
            "flags": 128,
            "start": 27742,
            "end": 27773
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 27779,
                "end": 27786
            },
            "flags": 128,
            "start": 27779,
            "end": 27786
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 27795,
                "end": 27802
            },
            "flags": 128,
            "start": 27795,
            "end": 27802
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
                            "start": 27802,
                            "end": 27806
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 27806,
                            "end": 27814
                        },
                        "flags": 256,
                        "start": 27802,
                        "end": 27814
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"let a\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": false,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 3,\r                                \"end\": 5\r                            },\r                            \"exclamation\": false,\r                            \"type\": null,\r                            \"initializer\": null,\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 3,\r                            \"end\": 5\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 3,\r                    \"end\": 5\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 5\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 5\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 5\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"let a\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": null,\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 3,\r\n                            \"end\": 5\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 5\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 5\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 5\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 5\r\n}\r\n",
                        "flags": 768,
                        "start": 27814,
                        "end": 29804
                    },
                    "flags": 256,
                    "start": 27802,
                    "end": 29804
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 29804,
                    "end": 29806
                },
                "flags": 256,
                "start": 27802,
                "end": 29806
            },
            "flags": 128,
            "start": 27802,
            "end": 29806
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
                            "start": 29813,
                            "end": 29821
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 29821,
                            "end": 29829
                        },
                        "flags": 256,
                        "start": 29813,
                        "end": 29829
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 29829,
                        "end": 29870
                    },
                    "flags": 256,
                    "start": 29813,
                    "end": 29870
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 29870,
                    "end": 29872
                },
                "flags": 256,
                "start": 29813,
                "end": 29872
            },
            "flags": 128,
            "start": 29813,
            "end": 29872
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
                                    "start": 29879,
                                    "end": 29891
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 29891,
                                    "end": 29899
                                },
                                "flags": 256,
                                "start": 29879,
                                "end": 29899
                            },
                            "template": {
                                "kind": 458761,
                                "text": "javascript\r\r",
                                "rawText": "javascript\r\n\r\n",
                                "flags": 768,
                                "start": 29899,
                                "end": 29915
                            },
                            "flags": 256,
                            "start": 29879,
                            "end": 29915
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 29915,
                            "end": 29917
                        },
                        "flags": 256,
                        "start": 29879,
                        "end": 29917
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 29917,
                        "end": 29923
                    },
                    "flags": 256,
                    "start": 29879,
                    "end": 29923
                },
                "template": {
                    "kind": 458761,
                    "text": "\n",
                    "rawText": "",
                    "flags": 768,
                    "start": 29923,
                    "end": 29925
                },
                "flags": 256,
                "start": 29879,
                "end": 29925
            },
            "flags": 128,
            "start": 29879,
            "end": 29925
        }
    ],
    "isModule": false,
    "text": "parser test case\r\n\r\n## Input\r\n\r\n`````js\r\nlet a\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"let a\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": null,\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 3,\r\n                            \"end\": 5\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 5\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 5\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 5\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 5\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n\n## Output\n\n### Hybrid CST\n\n```javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\rlet a\\r\",\n                            \"rawText\": \"js\\r\\nlet a\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 49\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 49\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 49,\n                        \"end\": 51\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 51\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 51,\n                    \"end\": 53\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 53\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 53\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 59,\n                \"end\": 66\n            },\n            \"flags\": 128,\n            \"start\": 59,\n            \"end\": 66\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 75,\n                \"end\": 82\n            },\n            \"flags\": 128,\n            \"start\": 75,\n            \"end\": 82\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 82,\n                            \"end\": 86\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 86,\n                            \"end\": 94\n                        },\n                        \"flags\": 256,\n                        \"start\": 82,\n                        \"end\": 94\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\"let a\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 142,\\r                \\\"isConst\\\": false,\\r                \\\"binding\\\": {\\r                    \\\"kind\\\": 31,\\r                    \\\"bindingList\\\": [\\r                        {\\r                            \\\"kind\\\": 141,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"a\\\",\\r                                \\\"rawText\\\": \\\"a\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 3,\\r                                \\\"end\\\": 5\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": null,\\r                            \\\"initializer\\\": null,\\r                            \\\"flags\\\": 0,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 3,\\r                            \\\"end\\\": 5\\r                        }\\r                    ],\\r                    \\\"flags\\\": 16,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 3,\\r                    \\\"end\\\": 5\\r                },\\r                \\\"flags\\\": 16,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 769,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 5\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 5\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 5\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"let a\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 142,\\r\\n                \\\"isConst\\\": false,\\r\\n                \\\"binding\\\": {\\r\\n                    \\\"kind\\\": 31,\\r\\n                    \\\"bindingList\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 141,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"a\\\",\\r\\n                                \\\"rawText\\\": \\\"a\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 3,\\r\\n                                \\\"end\\\": 5\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": null,\\r\\n                            \\\"initializer\\\": null,\\r\\n                            \\\"flags\\\": 0,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 3,\\r\\n                            \\\"end\\\": 5\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 16,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 3,\\r\\n                    \\\"end\\\": 5\\r\\n                },\\r\\n                \\\"flags\\\": 16,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 769,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 5\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 5\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 5\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 94,\n                        \"end\": 2084\n                    },\n                    \"flags\": 256,\n                    \"start\": 82,\n                    \"end\": 2084\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2084,\n                    \"end\": 2086\n                },\n                \"flags\": 256,\n                \"start\": 82,\n                \"end\": 2086\n            },\n            \"flags\": 128,\n            \"start\": 82,\n            \"end\": 2086\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 2093,\n                            \"end\": 2101\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2101,\n                            \"end\": 2109\n                        },\n                        \"flags\": 256,\n                        \"start\": 2093,\n                        \"end\": 2109\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2109,\n                        \"end\": 2150\n                    },\n                    \"flags\": 256,\n                    \"start\": 2093,\n                    \"end\": 2150\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2150,\n                    \"end\": 2152\n                },\n                \"flags\": 256,\n                \"start\": 2093,\n                \"end\": 2152\n            },\n            \"flags\": 128,\n            \"start\": 2093,\n            \"end\": 2152\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 2159,\n                            \"end\": 2171\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2171,\n                            \"end\": 2179\n                        },\n                        \"flags\": 256,\n                        \"start\": 2159,\n                        \"end\": 2179\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2179,\n                        \"end\": 2195\n                    },\n                    \"flags\": 256,\n                    \"start\": 2159,\n                    \"end\": 2195\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2195,\n                    \"end\": 2197\n                },\n                \"flags\": 256,\n                \"start\": 2159,\n                \"end\": 2197\n            },\n            \"flags\": 128,\n            \"start\": 2159,\n            \"end\": 2197\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n`````js\\r\\nlet a\\r\\n`````\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n```javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"let a\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 142,\\r\\n                \\\"isConst\\\": false,\\r\\n                \\\"binding\\\": {\\r\\n                    \\\"kind\\\": 31,\\r\\n                    \\\"bindingList\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 141,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"a\\\",\\r\\n                                \\\"rawText\\\": \\\"a\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 3,\\r\\n                                \\\"end\\\": 5\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": null,\\r\\n                            \\\"initializer\\\": null,\\r\\n                            \\\"flags\\\": 0,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 3,\\r\\n                            \\\"end\\\": 5\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 16,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 3,\\r\\n                    \\\"end\\\": 5\\r\\n                },\\r\\n                \\\"flags\\\": 16,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 769,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 5\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 5\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 5\\r\\n}\\r\\n```\\r\\n\\r\\n### Printed\\r\\n\\r\\n\\r\\n```javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n```\\r\\n\\r\\n### Diagnostics\\r\\n\\r\\n\\r\\n```javascript\\r\\n\\r\\n```\\r\\n\\r\",\n    \"fileName\": \"__root__\",\n    \"flags\": 0,\n    \"diagnostics\": [\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 5,\n            \"error\": \"Statement expected\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 53,\n            \"end\": 58\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 53,\n            \"end\": 58\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 58,\n            \"end\": 59\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 58,\n            \"end\": 59\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 66,\n            \"end\": 73\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 66,\n            \"end\": 73\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 73,\n            \"end\": 74\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 73,\n            \"end\": 74\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 74,\n            \"end\": 75\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 74,\n            \"end\": 75\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 82,\n            \"end\": 86\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2086,\n            \"end\": 2091\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2086,\n            \"end\": 2091\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2091,\n            \"end\": 2092\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2091,\n            \"end\": 2092\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2092,\n            \"end\": 2093\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2092,\n            \"end\": 2093\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2152,\n            \"end\": 2157\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2152,\n            \"end\": 2157\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2157,\n            \"end\": 2158\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2157,\n            \"end\": 2158\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2158,\n            \"end\": 2159\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2158,\n            \"end\": 2159\n        }\n    ],\n    \"start\": 0,\n    \"end\": 2200\n}\n```\n\n### Printed\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\nlet a\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"let a\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": null,\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 3,\r\n                            \"end\": 5\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 5\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 5\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 5\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 5\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n\n### Diagnostics\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\nlet a\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"let a\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 3,\r\n                                \"end\": 5\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": null,\r\n                            \"initializer\": null,\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 3,\r\n                            \"end\": 5\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 3,\r\n                    \"end\": 5\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 5\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 5\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 5\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n",
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
            "start": 53,
            "end": 58
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 53,
            "end": 58
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 58,
            "end": 59
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 58,
            "end": 59
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 66,
            "end": 73
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 66,
            "end": 73
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 73,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 73,
            "end": 74
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 74,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 74,
            "end": 75
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 82,
            "end": 86
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2086,
            "end": 2091
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2086,
            "end": 2091
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2091,
            "end": 2092
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2091,
            "end": 2092
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2092,
            "end": 2093
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2092,
            "end": 2093
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2152,
            "end": 2157
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2152,
            "end": 2157
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2157,
            "end": 2158
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2157,
            "end": 2158
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2158,
            "end": 2159
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2158,
            "end": 2159
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2197,
            "end": 2203
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2197,
            "end": 2203
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2203,
            "end": 2204
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2203,
            "end": 2204
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2211,
            "end": 2214
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2211,
            "end": 2214
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2214,
            "end": 2215
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2214,
            "end": 2215
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2215,
            "end": 2216
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2215,
            "end": 2216
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2223,
            "end": 2227
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16899,
            "end": 16901
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16899,
            "end": 16901
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16901,
            "end": 16901
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16901,
            "end": 16902
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16901,
            "end": 16902
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16902,
            "end": 16903
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16903,
            "end": 16903
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16903,
            "end": 16904
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16903,
            "end": 16904
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16908,
            "end": 16910
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16908,
            "end": 16910
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16910,
            "end": 16910
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16910,
            "end": 16911
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16910,
            "end": 16911
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16911,
            "end": 16912
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16912,
            "end": 16912
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16912,
            "end": 16913
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16912,
            "end": 16913
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16977,
            "end": 16987
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16977,
            "end": 16987
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16987,
            "end": 16987
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16987,
            "end": 16988
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16987,
            "end": 16988
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16988,
            "end": 16989
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16989,
            "end": 16989
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16989,
            "end": 16990
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16989,
            "end": 16990
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16991,
            "end": 16992
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16992,
            "end": 16992
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16992,
            "end": 16993
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16992,
            "end": 16993
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16993,
            "end": 16994
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16994,
            "end": 16994
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16994,
            "end": 16995
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16994,
            "end": 16995
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 16996,
            "end": 17000
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16996,
            "end": 17001
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 16996,
            "end": 17001
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19374,
            "end": 19375
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19374,
            "end": 19375
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19399,
            "end": 19400
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19399,
            "end": 19400
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19421,
            "end": 19422
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19421,
            "end": 19422
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25440,
            "end": 25441
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 25440,
            "end": 25441
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25454,
            "end": 25455
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 25454,
            "end": 25455
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 25460,
            "end": 25462
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25484,
            "end": 25494
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25500,
            "end": 25505
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 25500,
            "end": 25505
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25505,
            "end": 25510
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 25505,
            "end": 25510
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25510,
            "end": 25511
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 25510,
            "end": 25511
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25542,
            "end": 25547
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 25542,
            "end": 25547
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25547,
            "end": 25548
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 25547,
            "end": 25548
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25555,
            "end": 25562
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 25555,
            "end": 25562
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25562,
            "end": 25563
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 25562,
            "end": 25563
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25563,
            "end": 25564
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 25563,
            "end": 25564
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 25571,
            "end": 25575
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27575,
            "end": 27580
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27575,
            "end": 27580
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27580,
            "end": 27581
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27580,
            "end": 27581
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27581,
            "end": 27582
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27581,
            "end": 27582
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27641,
            "end": 27646
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27641,
            "end": 27646
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27646,
            "end": 27647
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27646,
            "end": 27647
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27647,
            "end": 27648
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27647,
            "end": 27648
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27715,
            "end": 27725
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27731,
            "end": 27736
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 27731,
            "end": 27736
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27736,
            "end": 27741
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27736,
            "end": 27741
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27741,
            "end": 27742
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27741,
            "end": 27742
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27773,
            "end": 27778
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27773,
            "end": 27778
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27778,
            "end": 27779
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27778,
            "end": 27779
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27786,
            "end": 27793
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27786,
            "end": 27793
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27793,
            "end": 27794
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27793,
            "end": 27794
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27794,
            "end": 27795
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 27794,
            "end": 27795
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27802,
            "end": 27806
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29806,
            "end": 29811
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 29806,
            "end": 29811
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29811,
            "end": 29812
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 29811,
            "end": 29812
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29812,
            "end": 29813
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 29812,
            "end": 29813
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29872,
            "end": 29877
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 29872,
            "end": 29877
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29877,
            "end": 29878
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 29877,
            "end": 29878
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29878,
            "end": 29879
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 29878,
            "end": 29879
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 29923,
            "end": 29925
        }
    ],
    "start": 0,
    "end": 29925
}
```

### Printed

```javascript
 test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
let a@{xd}@
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
    "source": "let a",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": false,@{xd}@
                "binding": {@{xd}@
                    "kind": 31,@{xd}@
                    "bindingList": [@{xd}@
                        {@{xd}@
                            "kind": 141,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "a",@{xd}@
                                "rawText": "a",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 3,@{xd}@
                                "end": 5@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": null,@{xd}@
                            "initializer": null,@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 3,@{xd}@
                            "end": 5@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 3,@{xd}@
                    "end": 5@{xd}@
                },@{xd}@
                "flags": 16,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 0,@{xd}@
                "end": 5@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 5@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 5@{xd}@
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
let a@{xd}@
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
    "source": "let a",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": false,@{xd}@
                "binding": {@{xd}@
                    "kind": 31,@{xd}@
                    "bindingList": [@{xd}@
                        {@{xd}@
                            "kind": 141,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "a",@{xd}@
                                "rawText": "a",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 3,@{xd}@
                                "end": 5@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": null,@{xd}@
                            "initializer": null,@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 3,@{xd}@
                            "end": 5@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 3,@{xd}@
                    "end": 5@{xd}@
                },@{xd}@
                "flags": 16,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 0,@{xd}@
                "end": 5@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 5@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 5@{xd}@
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

