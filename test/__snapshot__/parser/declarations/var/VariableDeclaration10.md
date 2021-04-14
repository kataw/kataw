# Kataw parser test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
 let a: number = 1@{xd}@
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
    "source": " let a: number = 1",@{xd}@
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
                                "start": 4,@{xd}@
                                "end": 6@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 4202657,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 7,@{xd}@
                                "end": 14@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 16,@{xd}@
                                "end": 18@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 4,@{xd}@
                            "end": 18@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 4,@{xd}@
                    "end": 18@{xd}@
                },@{xd}@
                "flags": 16,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 0,@{xd}@
                "end": 18@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 18@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 18@{xd}@
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
                            "text": "js\r let a: number = 1\r",
                            "rawText": "js\r\n let a: number = 1\r\n",
                            "flags": 768,
                            "start": 36,
                            "end": 62
                        },
                        "flags": 256,
                        "start": 22,
                        "end": 62
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 62,
                        "end": 64
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 64
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 64,
                    "end": 66
                },
                "flags": 256,
                "start": 22,
                "end": 66
            },
            "flags": 128,
            "start": 22,
            "end": 66
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 72,
                "end": 79
            },
            "flags": 128,
            "start": 72,
            "end": 79
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 88,
                "end": 95
            },
            "flags": 128,
            "start": 88,
            "end": 95
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
                            "start": 95,
                            "end": 99
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 99,
                            "end": 107
                        },
                        "flags": 256,
                        "start": 95,
                        "end": 107
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \" let a: number = 1\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": false,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 4,\r                                \"end\": 6\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 4202657,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 7,\r                                \"end\": 14\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 16,\r                                \"end\": 18\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 4,\r                            \"end\": 18\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 4,\r                    \"end\": 18\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 18\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 18\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 18\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \" let a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 4,\r\n                                \"end\": 6\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 7,\r\n                                \"end\": 14\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 16,\r\n                                \"end\": 18\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 4,\r\n                            \"end\": 18\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 4,\r\n                    \"end\": 18\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 18\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 18\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 18\r\n}\r\n",
                        "flags": 768,
                        "start": 107,
                        "end": 2853
                    },
                    "flags": 256,
                    "start": 95,
                    "end": 2853
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 2853,
                    "end": 2855
                },
                "flags": 256,
                "start": 95,
                "end": 2855
            },
            "flags": 128,
            "start": 95,
            "end": 2855
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
                            "start": 2862,
                            "end": 2870
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 2870,
                            "end": 2878
                        },
                        "flags": 256,
                        "start": 2862,
                        "end": 2878
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 2878,
                        "end": 2919
                    },
                    "flags": 256,
                    "start": 2862,
                    "end": 2919
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 2919,
                    "end": 2921
                },
                "flags": 256,
                "start": 2862,
                "end": 2921
            },
            "flags": 128,
            "start": 2862,
            "end": 2921
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
                            "start": 2928,
                            "end": 2940
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 2940,
                            "end": 2948
                        },
                        "flags": 256,
                        "start": 2928,
                        "end": 2948
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r\r",
                        "rawText": "javascript\r\n\r\n",
                        "flags": 768,
                        "start": 2948,
                        "end": 2964
                    },
                    "flags": 256,
                    "start": 2928,
                    "end": 2964
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 2964,
                    "end": 2966
                },
                "flags": 256,
                "start": 2928,
                "end": 2966
            },
            "flags": 128,
            "start": 2928,
            "end": 2966
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 2973,
                "end": 2980
            },
            "flags": 128,
            "start": 2973,
            "end": 2980
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 2985,
                "end": 2992
            },
            "flags": 128,
            "start": 2985,
            "end": 2992
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
                                "start": 2992,
                                "end": 2996
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 2996,
                                "end": 3000
                            },
                            "flags": 256,
                            "start": 2992,
                            "end": 3000
                        },
                        "template": {
                            "kind": 458761,
                            "text": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\r let a: number = 1\r\",\n                            \"rawText\": \"js\r\n let a: number = 1\r\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 62\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 62\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 62,\n                        \"end\": 64\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 64\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 64,\n                    \"end\": 66\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 66\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 66\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 72,\n                \"end\": 79\n            },\n            \"flags\": 128,\n            \"start\": 72,\n            \"end\": 79\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 88,\n                \"end\": 95\n            },\n            \"flags\": 128,\n            \"start\": 88,\n            \"end\": 95\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 95,\n                            \"end\": 99\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 99,\n                            \"end\": 107\n                        },\n                        \"flags\": 256,\n                        \"start\": 95,\n                        \"end\": 107\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r{\r    \"kind\": 196,\r    \"source\": \" let a: number = 1\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": false,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 4,\r                                \"end\": 6\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 4202657,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 7,\r                                \"end\": 14\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 16,\r                                \"end\": 18\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 4,\r                            \"end\": 18\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 4,\r                    \"end\": 18\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 18\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 18\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 18\r}\r\",\n                        \"rawText\": \"javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \" let a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 4,\r\n                                \"end\": 6\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 7,\r\n                                \"end\": 14\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 16,\r\n                                \"end\": 18\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 4,\r\n                            \"end\": 18\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 4,\r\n                    \"end\": 18\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 18\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 18\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 18\r\n}\r\n\",\n                        \"flags\": 768,\n                        \"start\": 107,\n                        \"end\": 2853\n                    },\n                    \"flags\": 256,\n                    \"start\": 95,\n                    \"end\": 2853\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2853,\n                    \"end\": 2855\n                },\n                \"flags\": 256,\n                \"start\": 95,\n                \"end\": 2855\n            },\n            \"flags\": 128,\n            \"start\": 95,\n            \"end\": 2855\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 2862,\n                            \"end\": 2870\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2870,\n                            \"end\": 2878\n                        },\n                        \"flags\": 256,\n                        \"start\": 2862,\n                        \"end\": 2878\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r@{x2716}@ Soon to be open sourced\r\",\n                        \"rawText\": \"javascript\r\n@{x2716}@ Soon to be open sourced\r\n\",\n                        \"flags\": 768,\n                        \"start\": 2878,\n                        \"end\": 2919\n                    },\n                    \"flags\": 256,\n                    \"start\": 2862,\n                    \"end\": 2919\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2919,\n                    \"end\": 2921\n                },\n                \"flags\": 256,\n                \"start\": 2862,\n                \"end\": 2921\n            },\n            \"flags\": 128,\n            \"start\": 2862,\n            \"end\": 2921\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 2928,\n                            \"end\": 2940\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2940,\n                            \"end\": 2948\n                        },\n                        \"flags\": 256,\n                        \"start\": 2928,\n                        \"end\": 2948\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r\r\",\n                        \"rawText\": \"javascript\r\n\r\n\",\n                        \"flags\": 768,\n                        \"start\": 2948,\n                        \"end\": 2964\n                    },\n                    \"flags\": 256,\n                    \"start\": 2928,\n                    \"end\": 2964\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2964,\n                    \"end\": 2966\n                },\n                \"flags\": 256,\n                \"start\": 2928,\n                \"end\": 2966\n            },\n            \"flags\": 128,\n            \"start\": 2928,\n            \"end\": 2966\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\r\n\r\n## Input\r\n\r\n",
                            "rawText": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\r let a: number = 1\\r\",\n                            \"rawText\": \"js\\r\\n let a: number = 1\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 62\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 62\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 62,\n                        \"end\": 64\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 64\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 64,\n                    \"end\": 66\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 66\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 66\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 72,\n                \"end\": 79\n            },\n            \"flags\": 128,\n            \"start\": 72,\n            \"end\": 79\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 88,\n                \"end\": 95\n            },\n            \"flags\": 128,\n            \"start\": 88,\n            \"end\": 95\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 95,\n                            \"end\": 99\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 99,\n                            \"end\": 107\n                        },\n                        \"flags\": 256,\n                        \"start\": 95,\n                        \"end\": 107\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\" let a: number = 1\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 142,\\r                \\\"isConst\\\": false,\\r                \\\"binding\\\": {\\r                    \\\"kind\\\": 31,\\r                    \\\"bindingList\\\": [\\r                        {\\r                            \\\"kind\\\": 141,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"a\\\",\\r                                \\\"rawText\\\": \\\"a\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 4,\\r                                \\\"end\\\": 6\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": {\\r                                \\\"kind\\\": 4202657,\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 2097152,\\r                                \\\"start\\\": 7,\\r                                \\\"end\\\": 14\\r                            },\\r                            \\\"initializer\\\": {\\r                                \\\"kind\\\": 4261540,\\r                                \\\"text\\\": 1,\\r                                \\\"rawText\\\": \\\"1\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 0,\\r                                \\\"start\\\": 16,\\r                                \\\"end\\\": 18\\r                            },\\r                            \\\"flags\\\": 0,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 4,\\r                            \\\"end\\\": 18\\r                        }\\r                    ],\\r                    \\\"flags\\\": 16,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 4,\\r                    \\\"end\\\": 18\\r                },\\r                \\\"flags\\\": 16,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 769,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 18\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 18\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 18\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\" let a: number = 1\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 142,\\r\\n                \\\"isConst\\\": false,\\r\\n                \\\"binding\\\": {\\r\\n                    \\\"kind\\\": 31,\\r\\n                    \\\"bindingList\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 141,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"a\\\",\\r\\n                                \\\"rawText\\\": \\\"a\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 4,\\r\\n                                \\\"end\\\": 6\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": {\\r\\n                                \\\"kind\\\": 4202657,\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 2097152,\\r\\n                                \\\"start\\\": 7,\\r\\n                                \\\"end\\\": 14\\r\\n                            },\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 4261540,\\r\\n                                \\\"text\\\": 1,\\r\\n                                \\\"rawText\\\": \\\"1\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 16,\\r\\n                                \\\"end\\\": 18\\r\\n                            },\\r\\n                            \\\"flags\\\": 0,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 4,\\r\\n                            \\\"end\\\": 18\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 16,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 4,\\r\\n                    \\\"end\\\": 18\\r\\n                },\\r\\n                \\\"flags\\\": 16,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 769,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 18\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 18\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 18\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 107,\n                        \"end\": 2853\n                    },\n                    \"flags\": 256,\n                    \"start\": 95,\n                    \"end\": 2853\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2853,\n                    \"end\": 2855\n                },\n                \"flags\": 256,\n                \"start\": 95,\n                \"end\": 2855\n            },\n            \"flags\": 128,\n            \"start\": 95,\n            \"end\": 2855\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 2862,\n                            \"end\": 2870\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2870,\n                            \"end\": 2878\n                        },\n                        \"flags\": 256,\n                        \"start\": 2862,\n                        \"end\": 2878\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2878,\n                        \"end\": 2919\n                    },\n                    \"flags\": 256,\n                    \"start\": 2862,\n                    \"end\": 2919\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2919,\n                    \"end\": 2921\n                },\n                \"flags\": 256,\n                \"start\": 2862,\n                \"end\": 2921\n            },\n            \"flags\": 128,\n            \"start\": 2862,\n            \"end\": 2921\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 2928,\n                            \"end\": 2940\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2940,\n                            \"end\": 2948\n                        },\n                        \"flags\": 256,\n                        \"start\": 2928,\n                        \"end\": 2948\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2948,\n                        \"end\": 2964\n                    },\n                    \"flags\": 256,\n                    \"start\": 2928,\n                    \"end\": 2964\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2964,\n                    \"end\": 2966\n                },\n                \"flags\": 256,\n                \"start\": 2928,\n                \"end\": 2966\n            },\n            \"flags\": 128,\n            \"start\": 2928,\n            \"end\": 2966\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n",
                            "flags": 768,
                            "start": 3000,
                            "end": 19297
                        },
                        "flags": 256,
                        "start": 2992,
                        "end": 19297
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 19297,
                        "end": 19299
                    },
                    "flags": 256,
                    "start": 2992,
                    "end": 19299
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 19299,
                    "end": 19301
                },
                "flags": 256,
                "start": 2992,
                "end": 19301
            },
            "flags": 128,
            "start": 2992,
            "end": 19301
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "js",
                "rawText": "js",
                "flags": 768,
                "start": 19301,
                "end": 19303
            },
            "flags": 128,
            "start": 19301,
            "end": 19303
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 19304,
                "end": 19305
            },
            "flags": 128,
            "start": 19304,
            "end": 19305
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 19306,
                "end": 19307
            },
            "flags": 128,
            "start": 19306,
            "end": 19307
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 19307,
                "end": 19311
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 19311,
                            "end": 19313
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234345,
                                "flags": 768,
                                "start": 19314,
                                "end": 19321
                            },
                            "autofix": 0,
                            "flags": 0,
                            "start": 19313,
                            "end": 19321
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": 1,
                            "rawText": "1",
                            "flags": 768,
                            "start": 19323,
                            "end": 19325
                        },
                        "flags": 128,
                        "start": 19311,
                        "end": 19325
                    }
                ],
                "flags": 128,
                "start": 19311,
                "end": 19325
            },
            "flags": 128,
            "start": 19307,
            "end": 19325
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 19326,
                "end": 19327
            },
            "flags": 128,
            "start": 19326,
            "end": 19327
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
                                "start": 19328,
                                "end": 19329
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 19329,
                                "end": 19331
                            },
                            "flags": 256,
                            "start": 19328,
                            "end": 19331
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 19331,
                            "end": 19333
                        },
                        "flags": 256,
                        "start": 19328,
                        "end": 19333
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n",
                        "rawText": "\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n",
                        "flags": 768,
                        "start": 19333,
                        "end": 19390
                    },
                    "flags": 256,
                    "start": 19328,
                    "end": 19390
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 19390,
                    "end": 19392
                },
                "flags": 256,
                "start": 19328,
                "end": 19392
            },
            "flags": 128,
            "start": 19328,
            "end": 19392
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 19392,
                "end": 19402
            },
            "flags": 128,
            "start": 19392,
            "end": 19402
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 19403,
                "end": 19404
            },
            "flags": 128,
            "start": 19403,
            "end": 19404
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 19405,
                "end": 19406
            },
            "flags": 128,
            "start": 19405,
            "end": 19406
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 19407,
                "end": 19407
            },
            "flags": 128,
            "start": 19406,
            "end": 19407
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 19408,
                "end": 19409
            },
            "flags": 128,
            "start": 19408,
            "end": 19409
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 19410,
                "end": 19411
            },
            "flags": 128,
            "start": 19410,
            "end": 19411
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392131,
                        "text": "kind\": 196,\r\n    \"source\": \" let a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 4,\r\n                                \"end\": 6\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 7,\r\n                                \"end\": 14\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 16,\r\n                                \"end\": 18\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 4,\r\n                            \"end\": 18\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 4,\r\n                    \"end\": 18\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 18\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 18\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 18\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "rawText": "kind\": 196,\r\n    \"source\": \" let a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 4,\r\n                                \"end\": 6\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 7,\r\n                                \"end\": 14\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 16,\r\n                                \"end\": 18\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 4,\r\n                            \"end\": 18\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 4,\r\n                    \"end\": 18\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 18\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 18\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 18\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "flags": 768,
                        "start": 19416,
                        "end": 22591
                    },
                    {
                        "kind": 201392131,
                        "text": "fileName",
                        "rawText": "fileName",
                        "flags": 769,
                        "start": 22592,
                        "end": 22607
                    }
                ],
                "flags": 256,
                "start": 19416,
                "end": 22607
            },
            "flags": 128,
            "start": 19416,
            "end": 22607
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
                        "start": 22608,
                        "end": 22619
                    },
                    {
                        "kind": 201392131,
                        "text": "flags",
                        "rawText": "flags",
                        "flags": 769,
                        "start": 22620,
                        "end": 22632
                    }
                ],
                "flags": 256,
                "start": 22608,
                "end": 22632
            },
            "flags": 128,
            "start": 22608,
            "end": 22632
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
                        "start": 22633,
                        "end": 22635
                    },
                    {
                        "kind": 201392131,
                        "text": "diagnostics",
                        "rawText": "diagnostics",
                        "flags": 769,
                        "start": 22636,
                        "end": 22654
                    }
                ],
                "flags": 256,
                "start": 22633,
                "end": 22654
            },
            "flags": 128,
            "start": 22633,
            "end": 22654
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
                                                    "start": 22687,
                                                    "end": 22689
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 22667,
                                                    "end": 22686
                                                },
                                                "flags": 256,
                                                "start": 22667,
                                                "end": 22689
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 22712,
                                                    "end": 22714
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22690,
                                                    "end": 22711
                                                },
                                                "flags": 256,
                                                "start": 22690,
                                                "end": 22714
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 22735,
                                                    "end": 22737
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 22715,
                                                    "end": 22734
                                                },
                                                "flags": 256,
                                                "start": 22715,
                                                "end": 22737
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 22759,
                                                    "end": 22779
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 22738,
                                                    "end": 22758
                                                },
                                                "flags": 256,
                                                "start": 22738,
                                                "end": 22779
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6,
                                                    "rawText": "6",
                                                    "flags": 768,
                                                    "start": 22801,
                                                    "end": 22803
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 22780,
                                                    "end": 22800
                                                },
                                                "flags": 256,
                                                "start": 22780,
                                                "end": 22803
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 22823,
                                                    "end": 22826
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 22804,
                                                    "end": 22822
                                                },
                                                "flags": 256,
                                                "start": 22804,
                                                "end": 22826
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 22667,
                                        "end": 22826
                                    },
                                    "flags": 256,
                                    "start": 22657,
                                    "end": 22836
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
                                                    "start": 22867,
                                                    "end": 22869
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 22847,
                                                    "end": 22866
                                                },
                                                "flags": 256,
                                                "start": 22847,
                                                "end": 22869
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 22892,
                                                    "end": 22894
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22870,
                                                    "end": 22891
                                                },
                                                "flags": 256,
                                                "start": 22870,
                                                "end": 22894
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 22915,
                                                    "end": 22917
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 22895,
                                                    "end": 22914
                                                },
                                                "flags": 256,
                                                "start": 22895,
                                                "end": 22917
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 22939,
                                                    "end": 22959
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 22918,
                                                    "end": 22938
                                                },
                                                "flags": 256,
                                                "start": 22918,
                                                "end": 22959
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 22981,
                                                    "end": 22984
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 22960,
                                                    "end": 22980
                                                },
                                                "flags": 256,
                                                "start": 22960,
                                                "end": 22984
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 23004,
                                                    "end": 23007
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 22985,
                                                    "end": 23003
                                                },
                                                "flags": 256,
                                                "start": 22985,
                                                "end": 23007
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 22847,
                                        "end": 23007
                                    },
                                    "flags": 256,
                                    "start": 22837,
                                    "end": 23017
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
                                                    "start": 23048,
                                                    "end": 23050
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23028,
                                                    "end": 23047
                                                },
                                                "flags": 256,
                                                "start": 23028,
                                                "end": 23050
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23073,
                                                    "end": 23075
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23051,
                                                    "end": 23072
                                                },
                                                "flags": 256,
                                                "start": 23051,
                                                "end": 23075
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 768,
                                                    "start": 23096,
                                                    "end": 23098
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23076,
                                                    "end": 23095
                                                },
                                                "flags": 256,
                                                "start": 23076,
                                                "end": 23098
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Statement expected",
                                                    "rawText": "Statement expected",
                                                    "flags": 768,
                                                    "start": 23120,
                                                    "end": 23141
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23099,
                                                    "end": 23119
                                                },
                                                "flags": 256,
                                                "start": 23099,
                                                "end": 23141
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 23163,
                                                    "end": 23166
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23142,
                                                    "end": 23162
                                                },
                                                "flags": 256,
                                                "start": 23142,
                                                "end": 23166
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 23186,
                                                    "end": 23189
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23167,
                                                    "end": 23185
                                                },
                                                "flags": 256,
                                                "start": 23167,
                                                "end": 23189
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23028,
                                        "end": 23189
                                    },
                                    "flags": 256,
                                    "start": 23018,
                                    "end": 23199
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
                                                    "start": 23230,
                                                    "end": 23232
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23210,
                                                    "end": 23229
                                                },
                                                "flags": 256,
                                                "start": 23210,
                                                "end": 23232
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23255,
                                                    "end": 23257
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23233,
                                                    "end": 23254
                                                },
                                                "flags": 256,
                                                "start": 23233,
                                                "end": 23257
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 23278,
                                                    "end": 23280
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23258,
                                                    "end": 23277
                                                },
                                                "flags": 256,
                                                "start": 23258,
                                                "end": 23280
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 23302,
                                                    "end": 23322
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23281,
                                                    "end": 23301
                                                },
                                                "flags": 256,
                                                "start": 23281,
                                                "end": 23322
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 23344,
                                                    "end": 23347
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23323,
                                                    "end": 23343
                                                },
                                                "flags": 256,
                                                "start": 23323,
                                                "end": 23347
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 23367,
                                                    "end": 23370
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23348,
                                                    "end": 23366
                                                },
                                                "flags": 256,
                                                "start": 23348,
                                                "end": 23370
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23210,
                                        "end": 23370
                                    },
                                    "flags": 256,
                                    "start": 23200,
                                    "end": 23380
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
                                                    "start": 23411,
                                                    "end": 23413
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23391,
                                                    "end": 23410
                                                },
                                                "flags": 256,
                                                "start": 23391,
                                                "end": 23413
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23436,
                                                    "end": 23438
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23414,
                                                    "end": 23435
                                                },
                                                "flags": 256,
                                                "start": 23414,
                                                "end": 23438
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 23459,
                                                    "end": 23462
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23439,
                                                    "end": 23458
                                                },
                                                "flags": 256,
                                                "start": 23439,
                                                "end": 23462
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 23484,
                                                    "end": 23543
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23463,
                                                    "end": 23483
                                                },
                                                "flags": 256,
                                                "start": 23463,
                                                "end": 23543
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 23565,
                                                    "end": 23568
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23544,
                                                    "end": 23564
                                                },
                                                "flags": 256,
                                                "start": 23544,
                                                "end": 23568
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 23588,
                                                    "end": 23591
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23569,
                                                    "end": 23587
                                                },
                                                "flags": 256,
                                                "start": 23569,
                                                "end": 23591
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23391,
                                        "end": 23591
                                    },
                                    "flags": 256,
                                    "start": 23381,
                                    "end": 23601
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
                                                    "start": 23632,
                                                    "end": 23634
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23612,
                                                    "end": 23631
                                                },
                                                "flags": 256,
                                                "start": 23612,
                                                "end": 23634
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23657,
                                                    "end": 23659
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23635,
                                                    "end": 23656
                                                },
                                                "flags": 256,
                                                "start": 23635,
                                                "end": 23659
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 23680,
                                                    "end": 23682
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23660,
                                                    "end": 23679
                                                },
                                                "flags": 256,
                                                "start": 23660,
                                                "end": 23682
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 23704,
                                                    "end": 23724
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23683,
                                                    "end": 23703
                                                },
                                                "flags": 256,
                                                "start": 23683,
                                                "end": 23724
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 23746,
                                                    "end": 23749
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23725,
                                                    "end": 23745
                                                },
                                                "flags": 256,
                                                "start": 23725,
                                                "end": 23749
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 23769,
                                                    "end": 23772
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23750,
                                                    "end": 23768
                                                },
                                                "flags": 256,
                                                "start": 23750,
                                                "end": 23772
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23612,
                                        "end": 23772
                                    },
                                    "flags": 256,
                                    "start": 23602,
                                    "end": 23782
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
                                                    "start": 23813,
                                                    "end": 23815
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23793,
                                                    "end": 23812
                                                },
                                                "flags": 256,
                                                "start": 23793,
                                                "end": 23815
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23838,
                                                    "end": 23840
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23816,
                                                    "end": 23837
                                                },
                                                "flags": 256,
                                                "start": 23816,
                                                "end": 23840
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 23861,
                                                    "end": 23864
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23841,
                                                    "end": 23860
                                                },
                                                "flags": 256,
                                                "start": 23841,
                                                "end": 23864
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 23886,
                                                    "end": 23945
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23865,
                                                    "end": 23885
                                                },
                                                "flags": 256,
                                                "start": 23865,
                                                "end": 23945
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 23967,
                                                    "end": 23970
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23946,
                                                    "end": 23966
                                                },
                                                "flags": 256,
                                                "start": 23946,
                                                "end": 23970
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 23990,
                                                    "end": 23993
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23971,
                                                    "end": 23989
                                                },
                                                "flags": 256,
                                                "start": 23971,
                                                "end": 23993
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23793,
                                        "end": 23993
                                    },
                                    "flags": 256,
                                    "start": 23783,
                                    "end": 24003
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
                                                    "start": 24034,
                                                    "end": 24036
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24014,
                                                    "end": 24033
                                                },
                                                "flags": 256,
                                                "start": 24014,
                                                "end": 24036
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24059,
                                                    "end": 24061
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24037,
                                                    "end": 24058
                                                },
                                                "flags": 256,
                                                "start": 24037,
                                                "end": 24061
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 24082,
                                                    "end": 24084
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24062,
                                                    "end": 24081
                                                },
                                                "flags": 256,
                                                "start": 24062,
                                                "end": 24084
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 24106,
                                                    "end": 24126
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24085,
                                                    "end": 24105
                                                },
                                                "flags": 256,
                                                "start": 24085,
                                                "end": 24126
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 66,
                                                    "rawText": "66",
                                                    "flags": 768,
                                                    "start": 24148,
                                                    "end": 24151
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24127,
                                                    "end": 24147
                                                },
                                                "flags": 256,
                                                "start": 24127,
                                                "end": 24151
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 71,
                                                    "rawText": "71",
                                                    "flags": 768,
                                                    "start": 24171,
                                                    "end": 24174
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24152,
                                                    "end": 24170
                                                },
                                                "flags": 256,
                                                "start": 24152,
                                                "end": 24174
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24014,
                                        "end": 24174
                                    },
                                    "flags": 256,
                                    "start": 24004,
                                    "end": 24184
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
                                                    "start": 24215,
                                                    "end": 24217
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24195,
                                                    "end": 24214
                                                },
                                                "flags": 256,
                                                "start": 24195,
                                                "end": 24217
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24240,
                                                    "end": 24242
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24218,
                                                    "end": 24239
                                                },
                                                "flags": 256,
                                                "start": 24218,
                                                "end": 24242
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 24263,
                                                    "end": 24266
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24243,
                                                    "end": 24262
                                                },
                                                "flags": 256,
                                                "start": 24243,
                                                "end": 24266
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 24288,
                                                    "end": 24347
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24267,
                                                    "end": 24287
                                                },
                                                "flags": 256,
                                                "start": 24267,
                                                "end": 24347
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 66,
                                                    "rawText": "66",
                                                    "flags": 768,
                                                    "start": 24369,
                                                    "end": 24372
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24348,
                                                    "end": 24368
                                                },
                                                "flags": 256,
                                                "start": 24348,
                                                "end": 24372
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 71,
                                                    "rawText": "71",
                                                    "flags": 768,
                                                    "start": 24392,
                                                    "end": 24395
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24373,
                                                    "end": 24391
                                                },
                                                "flags": 256,
                                                "start": 24373,
                                                "end": 24395
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24195,
                                        "end": 24395
                                    },
                                    "flags": 256,
                                    "start": 24185,
                                    "end": 24405
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
                                                    "start": 24436,
                                                    "end": 24438
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24416,
                                                    "end": 24435
                                                },
                                                "flags": 256,
                                                "start": 24416,
                                                "end": 24438
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24461,
                                                    "end": 24463
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24439,
                                                    "end": 24460
                                                },
                                                "flags": 256,
                                                "start": 24439,
                                                "end": 24463
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 24484,
                                                    "end": 24486
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24464,
                                                    "end": 24483
                                                },
                                                "flags": 256,
                                                "start": 24464,
                                                "end": 24486
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 24508,
                                                    "end": 24528
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24487,
                                                    "end": 24507
                                                },
                                                "flags": 256,
                                                "start": 24487,
                                                "end": 24528
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 71,
                                                    "rawText": "71",
                                                    "flags": 768,
                                                    "start": 24550,
                                                    "end": 24553
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24529,
                                                    "end": 24549
                                                },
                                                "flags": 256,
                                                "start": 24529,
                                                "end": 24553
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 72,
                                                    "rawText": "72",
                                                    "flags": 768,
                                                    "start": 24573,
                                                    "end": 24576
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24554,
                                                    "end": 24572
                                                },
                                                "flags": 256,
                                                "start": 24554,
                                                "end": 24576
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24416,
                                        "end": 24576
                                    },
                                    "flags": 256,
                                    "start": 24406,
                                    "end": 24586
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
                                                    "start": 24617,
                                                    "end": 24619
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24597,
                                                    "end": 24616
                                                },
                                                "flags": 256,
                                                "start": 24597,
                                                "end": 24619
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24642,
                                                    "end": 24644
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24620,
                                                    "end": 24641
                                                },
                                                "flags": 256,
                                                "start": 24620,
                                                "end": 24644
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 24665,
                                                    "end": 24668
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24645,
                                                    "end": 24664
                                                },
                                                "flags": 256,
                                                "start": 24645,
                                                "end": 24668
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 24690,
                                                    "end": 24749
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24669,
                                                    "end": 24689
                                                },
                                                "flags": 256,
                                                "start": 24669,
                                                "end": 24749
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 71,
                                                    "rawText": "71",
                                                    "flags": 768,
                                                    "start": 24771,
                                                    "end": 24774
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24750,
                                                    "end": 24770
                                                },
                                                "flags": 256,
                                                "start": 24750,
                                                "end": 24774
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 72,
                                                    "rawText": "72",
                                                    "flags": 768,
                                                    "start": 24794,
                                                    "end": 24797
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24775,
                                                    "end": 24793
                                                },
                                                "flags": 256,
                                                "start": 24775,
                                                "end": 24797
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24597,
                                        "end": 24797
                                    },
                                    "flags": 256,
                                    "start": 24587,
                                    "end": 24807
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
                                                    "start": 24838,
                                                    "end": 24840
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24818,
                                                    "end": 24837
                                                },
                                                "flags": 256,
                                                "start": 24818,
                                                "end": 24840
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24863,
                                                    "end": 24865
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24841,
                                                    "end": 24862
                                                },
                                                "flags": 256,
                                                "start": 24841,
                                                "end": 24865
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 24886,
                                                    "end": 24888
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24866,
                                                    "end": 24885
                                                },
                                                "flags": 256,
                                                "start": 24866,
                                                "end": 24888
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 24910,
                                                    "end": 24930
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24889,
                                                    "end": 24909
                                                },
                                                "flags": 256,
                                                "start": 24889,
                                                "end": 24930
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 79,
                                                    "rawText": "79",
                                                    "flags": 768,
                                                    "start": 24952,
                                                    "end": 24955
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24931,
                                                    "end": 24951
                                                },
                                                "flags": 256,
                                                "start": 24931,
                                                "end": 24955
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 86,
                                                    "rawText": "86",
                                                    "flags": 768,
                                                    "start": 24975,
                                                    "end": 24978
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24956,
                                                    "end": 24974
                                                },
                                                "flags": 256,
                                                "start": 24956,
                                                "end": 24978
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24818,
                                        "end": 24978
                                    },
                                    "flags": 256,
                                    "start": 24808,
                                    "end": 24988
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
                                                    "start": 25019,
                                                    "end": 25021
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24999,
                                                    "end": 25018
                                                },
                                                "flags": 256,
                                                "start": 24999,
                                                "end": 25021
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25044,
                                                    "end": 25046
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25022,
                                                    "end": 25043
                                                },
                                                "flags": 256,
                                                "start": 25022,
                                                "end": 25046
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 25067,
                                                    "end": 25070
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25047,
                                                    "end": 25066
                                                },
                                                "flags": 256,
                                                "start": 25047,
                                                "end": 25070
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 25092,
                                                    "end": 25151
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25071,
                                                    "end": 25091
                                                },
                                                "flags": 256,
                                                "start": 25071,
                                                "end": 25151
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 79,
                                                    "rawText": "79",
                                                    "flags": 768,
                                                    "start": 25173,
                                                    "end": 25176
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25152,
                                                    "end": 25172
                                                },
                                                "flags": 256,
                                                "start": 25152,
                                                "end": 25176
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 86,
                                                    "rawText": "86",
                                                    "flags": 768,
                                                    "start": 25196,
                                                    "end": 25199
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25177,
                                                    "end": 25195
                                                },
                                                "flags": 256,
                                                "start": 25177,
                                                "end": 25199
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24999,
                                        "end": 25199
                                    },
                                    "flags": 256,
                                    "start": 24989,
                                    "end": 25209
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
                                                    "start": 25240,
                                                    "end": 25242
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25220,
                                                    "end": 25239
                                                },
                                                "flags": 256,
                                                "start": 25220,
                                                "end": 25242
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25265,
                                                    "end": 25267
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25243,
                                                    "end": 25264
                                                },
                                                "flags": 256,
                                                "start": 25243,
                                                "end": 25267
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 25288,
                                                    "end": 25290
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25268,
                                                    "end": 25287
                                                },
                                                "flags": 256,
                                                "start": 25268,
                                                "end": 25290
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 25312,
                                                    "end": 25332
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25291,
                                                    "end": 25311
                                                },
                                                "flags": 256,
                                                "start": 25291,
                                                "end": 25332
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 86,
                                                    "rawText": "86",
                                                    "flags": 768,
                                                    "start": 25354,
                                                    "end": 25357
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25333,
                                                    "end": 25353
                                                },
                                                "flags": 256,
                                                "start": 25333,
                                                "end": 25357
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 87,
                                                    "rawText": "87",
                                                    "flags": 768,
                                                    "start": 25377,
                                                    "end": 25380
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25358,
                                                    "end": 25376
                                                },
                                                "flags": 256,
                                                "start": 25358,
                                                "end": 25380
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25220,
                                        "end": 25380
                                    },
                                    "flags": 256,
                                    "start": 25210,
                                    "end": 25390
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
                                                    "start": 25421,
                                                    "end": 25423
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25401,
                                                    "end": 25420
                                                },
                                                "flags": 256,
                                                "start": 25401,
                                                "end": 25423
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25446,
                                                    "end": 25448
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25424,
                                                    "end": 25445
                                                },
                                                "flags": 256,
                                                "start": 25424,
                                                "end": 25448
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 25469,
                                                    "end": 25472
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25449,
                                                    "end": 25468
                                                },
                                                "flags": 256,
                                                "start": 25449,
                                                "end": 25472
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 25494,
                                                    "end": 25553
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25473,
                                                    "end": 25493
                                                },
                                                "flags": 256,
                                                "start": 25473,
                                                "end": 25553
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 86,
                                                    "rawText": "86",
                                                    "flags": 768,
                                                    "start": 25575,
                                                    "end": 25578
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25554,
                                                    "end": 25574
                                                },
                                                "flags": 256,
                                                "start": 25554,
                                                "end": 25578
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 87,
                                                    "rawText": "87",
                                                    "flags": 768,
                                                    "start": 25598,
                                                    "end": 25601
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25579,
                                                    "end": 25597
                                                },
                                                "flags": 256,
                                                "start": 25579,
                                                "end": 25601
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25401,
                                        "end": 25601
                                    },
                                    "flags": 256,
                                    "start": 25391,
                                    "end": 25611
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
                                                    "start": 25642,
                                                    "end": 25644
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25622,
                                                    "end": 25641
                                                },
                                                "flags": 256,
                                                "start": 25622,
                                                "end": 25644
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25667,
                                                    "end": 25669
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25645,
                                                    "end": 25666
                                                },
                                                "flags": 256,
                                                "start": 25645,
                                                "end": 25669
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 25690,
                                                    "end": 25692
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25670,
                                                    "end": 25689
                                                },
                                                "flags": 256,
                                                "start": 25670,
                                                "end": 25692
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 25714,
                                                    "end": 25734
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25693,
                                                    "end": 25713
                                                },
                                                "flags": 256,
                                                "start": 25693,
                                                "end": 25734
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 87,
                                                    "rawText": "87",
                                                    "flags": 768,
                                                    "start": 25756,
                                                    "end": 25759
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25735,
                                                    "end": 25755
                                                },
                                                "flags": 256,
                                                "start": 25735,
                                                "end": 25759
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 88,
                                                    "rawText": "88",
                                                    "flags": 768,
                                                    "start": 25779,
                                                    "end": 25782
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25760,
                                                    "end": 25778
                                                },
                                                "flags": 256,
                                                "start": 25760,
                                                "end": 25782
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25622,
                                        "end": 25782
                                    },
                                    "flags": 256,
                                    "start": 25612,
                                    "end": 25792
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
                                                    "start": 25823,
                                                    "end": 25825
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25803,
                                                    "end": 25822
                                                },
                                                "flags": 256,
                                                "start": 25803,
                                                "end": 25825
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25848,
                                                    "end": 25850
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25826,
                                                    "end": 25847
                                                },
                                                "flags": 256,
                                                "start": 25826,
                                                "end": 25850
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 25871,
                                                    "end": 25874
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25851,
                                                    "end": 25870
                                                },
                                                "flags": 256,
                                                "start": 25851,
                                                "end": 25874
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 25896,
                                                    "end": 25955
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25875,
                                                    "end": 25895
                                                },
                                                "flags": 256,
                                                "start": 25875,
                                                "end": 25955
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 87,
                                                    "rawText": "87",
                                                    "flags": 768,
                                                    "start": 25977,
                                                    "end": 25980
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25956,
                                                    "end": 25976
                                                },
                                                "flags": 256,
                                                "start": 25956,
                                                "end": 25980
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 88,
                                                    "rawText": "88",
                                                    "flags": 768,
                                                    "start": 26000,
                                                    "end": 26003
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25981,
                                                    "end": 25999
                                                },
                                                "flags": 256,
                                                "start": 25981,
                                                "end": 26003
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25803,
                                        "end": 26003
                                    },
                                    "flags": 256,
                                    "start": 25793,
                                    "end": 26013
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
                                                    "start": 26044,
                                                    "end": 26046
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26024,
                                                    "end": 26043
                                                },
                                                "flags": 256,
                                                "start": 26024,
                                                "end": 26046
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26069,
                                                    "end": 26071
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26047,
                                                    "end": 26068
                                                },
                                                "flags": 256,
                                                "start": 26047,
                                                "end": 26071
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 26092,
                                                    "end": 26094
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26072,
                                                    "end": 26091
                                                },
                                                "flags": 256,
                                                "start": 26072,
                                                "end": 26094
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 26116,
                                                    "end": 26136
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26095,
                                                    "end": 26115
                                                },
                                                "flags": 256,
                                                "start": 26095,
                                                "end": 26136
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 95,
                                                    "rawText": "95",
                                                    "flags": 768,
                                                    "start": 26158,
                                                    "end": 26161
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26137,
                                                    "end": 26157
                                                },
                                                "flags": 256,
                                                "start": 26137,
                                                "end": 26161
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 99,
                                                    "rawText": "99",
                                                    "flags": 768,
                                                    "start": 26181,
                                                    "end": 26184
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26162,
                                                    "end": 26180
                                                },
                                                "flags": 256,
                                                "start": 26162,
                                                "end": 26184
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26024,
                                        "end": 26184
                                    },
                                    "flags": 256,
                                    "start": 26014,
                                    "end": 26194
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
                                                    "start": 26225,
                                                    "end": 26227
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26205,
                                                    "end": 26224
                                                },
                                                "flags": 256,
                                                "start": 26205,
                                                "end": 26227
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26250,
                                                    "end": 26252
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26228,
                                                    "end": 26249
                                                },
                                                "flags": 256,
                                                "start": 26228,
                                                "end": 26252
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 26273,
                                                    "end": 26275
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26253,
                                                    "end": 26272
                                                },
                                                "flags": 256,
                                                "start": 26253,
                                                "end": 26275
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 26297,
                                                    "end": 26317
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26276,
                                                    "end": 26296
                                                },
                                                "flags": 256,
                                                "start": 26276,
                                                "end": 26317
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2855,
                                                    "rawText": "2855",
                                                    "flags": 768,
                                                    "start": 26339,
                                                    "end": 26344
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26318,
                                                    "end": 26338
                                                },
                                                "flags": 256,
                                                "start": 26318,
                                                "end": 26344
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2860,
                                                    "rawText": "2860",
                                                    "flags": 768,
                                                    "start": 26364,
                                                    "end": 26369
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26345,
                                                    "end": 26363
                                                },
                                                "flags": 256,
                                                "start": 26345,
                                                "end": 26369
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26205,
                                        "end": 26369
                                    },
                                    "flags": 256,
                                    "start": 26195,
                                    "end": 26379
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
                                                    "start": 26410,
                                                    "end": 26412
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26390,
                                                    "end": 26409
                                                },
                                                "flags": 256,
                                                "start": 26390,
                                                "end": 26412
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26435,
                                                    "end": 26437
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26413,
                                                    "end": 26434
                                                },
                                                "flags": 256,
                                                "start": 26413,
                                                "end": 26437
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 26458,
                                                    "end": 26461
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26438,
                                                    "end": 26457
                                                },
                                                "flags": 256,
                                                "start": 26438,
                                                "end": 26461
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 26483,
                                                    "end": 26542
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26462,
                                                    "end": 26482
                                                },
                                                "flags": 256,
                                                "start": 26462,
                                                "end": 26542
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2855,
                                                    "rawText": "2855",
                                                    "flags": 768,
                                                    "start": 26564,
                                                    "end": 26569
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26543,
                                                    "end": 26563
                                                },
                                                "flags": 256,
                                                "start": 26543,
                                                "end": 26569
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2860,
                                                    "rawText": "2860",
                                                    "flags": 768,
                                                    "start": 26589,
                                                    "end": 26594
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26570,
                                                    "end": 26588
                                                },
                                                "flags": 256,
                                                "start": 26570,
                                                "end": 26594
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26390,
                                        "end": 26594
                                    },
                                    "flags": 256,
                                    "start": 26380,
                                    "end": 26604
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
                                                    "start": 26635,
                                                    "end": 26637
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26615,
                                                    "end": 26634
                                                },
                                                "flags": 256,
                                                "start": 26615,
                                                "end": 26637
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26660,
                                                    "end": 26662
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26638,
                                                    "end": 26659
                                                },
                                                "flags": 256,
                                                "start": 26638,
                                                "end": 26662
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 26683,
                                                    "end": 26685
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26663,
                                                    "end": 26682
                                                },
                                                "flags": 256,
                                                "start": 26663,
                                                "end": 26685
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 26707,
                                                    "end": 26727
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26686,
                                                    "end": 26706
                                                },
                                                "flags": 256,
                                                "start": 26686,
                                                "end": 26727
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2860,
                                                    "rawText": "2860",
                                                    "flags": 768,
                                                    "start": 26749,
                                                    "end": 26754
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26728,
                                                    "end": 26748
                                                },
                                                "flags": 256,
                                                "start": 26728,
                                                "end": 26754
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2861,
                                                    "rawText": "2861",
                                                    "flags": 768,
                                                    "start": 26774,
                                                    "end": 26779
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26755,
                                                    "end": 26773
                                                },
                                                "flags": 256,
                                                "start": 26755,
                                                "end": 26779
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26615,
                                        "end": 26779
                                    },
                                    "flags": 256,
                                    "start": 26605,
                                    "end": 26789
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
                                                    "start": 26820,
                                                    "end": 26822
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26800,
                                                    "end": 26819
                                                },
                                                "flags": 256,
                                                "start": 26800,
                                                "end": 26822
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26845,
                                                    "end": 26847
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26823,
                                                    "end": 26844
                                                },
                                                "flags": 256,
                                                "start": 26823,
                                                "end": 26847
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 26868,
                                                    "end": 26871
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26848,
                                                    "end": 26867
                                                },
                                                "flags": 256,
                                                "start": 26848,
                                                "end": 26871
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 26893,
                                                    "end": 26952
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26872,
                                                    "end": 26892
                                                },
                                                "flags": 256,
                                                "start": 26872,
                                                "end": 26952
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2860,
                                                    "rawText": "2860",
                                                    "flags": 768,
                                                    "start": 26974,
                                                    "end": 26979
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26953,
                                                    "end": 26973
                                                },
                                                "flags": 256,
                                                "start": 26953,
                                                "end": 26979
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2861,
                                                    "rawText": "2861",
                                                    "flags": 768,
                                                    "start": 26999,
                                                    "end": 27004
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26980,
                                                    "end": 26998
                                                },
                                                "flags": 256,
                                                "start": 26980,
                                                "end": 27004
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26800,
                                        "end": 27004
                                    },
                                    "flags": 256,
                                    "start": 26790,
                                    "end": 27014
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
                                                    "start": 27045,
                                                    "end": 27047
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27025,
                                                    "end": 27044
                                                },
                                                "flags": 256,
                                                "start": 27025,
                                                "end": 27047
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27070,
                                                    "end": 27072
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27048,
                                                    "end": 27069
                                                },
                                                "flags": 256,
                                                "start": 27048,
                                                "end": 27072
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 27093,
                                                    "end": 27095
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27073,
                                                    "end": 27092
                                                },
                                                "flags": 256,
                                                "start": 27073,
                                                "end": 27095
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 27117,
                                                    "end": 27137
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27096,
                                                    "end": 27116
                                                },
                                                "flags": 256,
                                                "start": 27096,
                                                "end": 27137
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2861,
                                                    "rawText": "2861",
                                                    "flags": 768,
                                                    "start": 27159,
                                                    "end": 27164
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27138,
                                                    "end": 27158
                                                },
                                                "flags": 256,
                                                "start": 27138,
                                                "end": 27164
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2862,
                                                    "rawText": "2862",
                                                    "flags": 768,
                                                    "start": 27184,
                                                    "end": 27189
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27165,
                                                    "end": 27183
                                                },
                                                "flags": 256,
                                                "start": 27165,
                                                "end": 27189
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27025,
                                        "end": 27189
                                    },
                                    "flags": 256,
                                    "start": 27015,
                                    "end": 27199
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
                                                    "start": 27230,
                                                    "end": 27232
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27210,
                                                    "end": 27229
                                                },
                                                "flags": 256,
                                                "start": 27210,
                                                "end": 27232
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27255,
                                                    "end": 27257
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27233,
                                                    "end": 27254
                                                },
                                                "flags": 256,
                                                "start": 27233,
                                                "end": 27257
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 27278,
                                                    "end": 27281
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27258,
                                                    "end": 27277
                                                },
                                                "flags": 256,
                                                "start": 27258,
                                                "end": 27281
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 27303,
                                                    "end": 27362
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27282,
                                                    "end": 27302
                                                },
                                                "flags": 256,
                                                "start": 27282,
                                                "end": 27362
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2861,
                                                    "rawText": "2861",
                                                    "flags": 768,
                                                    "start": 27384,
                                                    "end": 27389
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27363,
                                                    "end": 27383
                                                },
                                                "flags": 256,
                                                "start": 27363,
                                                "end": 27389
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2862,
                                                    "rawText": "2862",
                                                    "flags": 768,
                                                    "start": 27409,
                                                    "end": 27414
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27390,
                                                    "end": 27408
                                                },
                                                "flags": 256,
                                                "start": 27390,
                                                "end": 27414
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27210,
                                        "end": 27414
                                    },
                                    "flags": 256,
                                    "start": 27200,
                                    "end": 27424
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
                                                    "start": 27455,
                                                    "end": 27457
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27435,
                                                    "end": 27454
                                                },
                                                "flags": 256,
                                                "start": 27435,
                                                "end": 27457
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27480,
                                                    "end": 27482
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27458,
                                                    "end": 27479
                                                },
                                                "flags": 256,
                                                "start": 27458,
                                                "end": 27482
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 27503,
                                                    "end": 27505
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27483,
                                                    "end": 27502
                                                },
                                                "flags": 256,
                                                "start": 27483,
                                                "end": 27505
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 27527,
                                                    "end": 27547
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27506,
                                                    "end": 27526
                                                },
                                                "flags": 256,
                                                "start": 27506,
                                                "end": 27547
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2921,
                                                    "rawText": "2921",
                                                    "flags": 768,
                                                    "start": 27569,
                                                    "end": 27574
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27548,
                                                    "end": 27568
                                                },
                                                "flags": 256,
                                                "start": 27548,
                                                "end": 27574
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2926,
                                                    "rawText": "2926",
                                                    "flags": 768,
                                                    "start": 27594,
                                                    "end": 27599
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27575,
                                                    "end": 27593
                                                },
                                                "flags": 256,
                                                "start": 27575,
                                                "end": 27599
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27435,
                                        "end": 27599
                                    },
                                    "flags": 256,
                                    "start": 27425,
                                    "end": 27609
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
                                                    "start": 27640,
                                                    "end": 27642
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27620,
                                                    "end": 27639
                                                },
                                                "flags": 256,
                                                "start": 27620,
                                                "end": 27642
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27665,
                                                    "end": 27667
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27643,
                                                    "end": 27664
                                                },
                                                "flags": 256,
                                                "start": 27643,
                                                "end": 27667
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 27688,
                                                    "end": 27691
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27668,
                                                    "end": 27687
                                                },
                                                "flags": 256,
                                                "start": 27668,
                                                "end": 27691
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 27713,
                                                    "end": 27772
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27692,
                                                    "end": 27712
                                                },
                                                "flags": 256,
                                                "start": 27692,
                                                "end": 27772
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2921,
                                                    "rawText": "2921",
                                                    "flags": 768,
                                                    "start": 27794,
                                                    "end": 27799
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27773,
                                                    "end": 27793
                                                },
                                                "flags": 256,
                                                "start": 27773,
                                                "end": 27799
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2926,
                                                    "rawText": "2926",
                                                    "flags": 768,
                                                    "start": 27819,
                                                    "end": 27824
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27800,
                                                    "end": 27818
                                                },
                                                "flags": 256,
                                                "start": 27800,
                                                "end": 27824
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27620,
                                        "end": 27824
                                    },
                                    "flags": 256,
                                    "start": 27610,
                                    "end": 27834
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
                                                    "start": 27865,
                                                    "end": 27867
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27845,
                                                    "end": 27864
                                                },
                                                "flags": 256,
                                                "start": 27845,
                                                "end": 27867
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27890,
                                                    "end": 27892
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27868,
                                                    "end": 27889
                                                },
                                                "flags": 256,
                                                "start": 27868,
                                                "end": 27892
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 27913,
                                                    "end": 27915
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27893,
                                                    "end": 27912
                                                },
                                                "flags": 256,
                                                "start": 27893,
                                                "end": 27915
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 27937,
                                                    "end": 27957
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27916,
                                                    "end": 27936
                                                },
                                                "flags": 256,
                                                "start": 27916,
                                                "end": 27957
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2926,
                                                    "rawText": "2926",
                                                    "flags": 768,
                                                    "start": 27979,
                                                    "end": 27984
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27958,
                                                    "end": 27978
                                                },
                                                "flags": 256,
                                                "start": 27958,
                                                "end": 27984
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2927,
                                                    "rawText": "2927",
                                                    "flags": 768,
                                                    "start": 28004,
                                                    "end": 28009
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27985,
                                                    "end": 28003
                                                },
                                                "flags": 256,
                                                "start": 27985,
                                                "end": 28009
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27845,
                                        "end": 28009
                                    },
                                    "flags": 256,
                                    "start": 27835,
                                    "end": 28019
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
                                                    "start": 28050,
                                                    "end": 28052
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 28030,
                                                    "end": 28049
                                                },
                                                "flags": 256,
                                                "start": 28030,
                                                "end": 28052
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 28075,
                                                    "end": 28077
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 28053,
                                                    "end": 28074
                                                },
                                                "flags": 256,
                                                "start": 28053,
                                                "end": 28077
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 28098,
                                                    "end": 28101
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 28078,
                                                    "end": 28097
                                                },
                                                "flags": 256,
                                                "start": 28078,
                                                "end": 28101
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 28123,
                                                    "end": 28182
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 28102,
                                                    "end": 28122
                                                },
                                                "flags": 256,
                                                "start": 28102,
                                                "end": 28182
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2926,
                                                    "rawText": "2926",
                                                    "flags": 768,
                                                    "start": 28204,
                                                    "end": 28209
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 28183,
                                                    "end": 28203
                                                },
                                                "flags": 256,
                                                "start": 28183,
                                                "end": 28209
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2927,
                                                    "rawText": "2927",
                                                    "flags": 768,
                                                    "start": 28229,
                                                    "end": 28234
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 28210,
                                                    "end": 28228
                                                },
                                                "flags": 256,
                                                "start": 28210,
                                                "end": 28234
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 28030,
                                        "end": 28234
                                    },
                                    "flags": 256,
                                    "start": 28020,
                                    "end": 28244
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
                                                    "start": 28275,
                                                    "end": 28277
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 28255,
                                                    "end": 28274
                                                },
                                                "flags": 256,
                                                "start": 28255,
                                                "end": 28277
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 28300,
                                                    "end": 28302
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 28278,
                                                    "end": 28299
                                                },
                                                "flags": 256,
                                                "start": 28278,
                                                "end": 28302
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 28323,
                                                    "end": 28325
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 28303,
                                                    "end": 28322
                                                },
                                                "flags": 256,
                                                "start": 28303,
                                                "end": 28325
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 28347,
                                                    "end": 28367
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 28326,
                                                    "end": 28346
                                                },
                                                "flags": 256,
                                                "start": 28326,
                                                "end": 28367
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2927,
                                                    "rawText": "2927",
                                                    "flags": 768,
                                                    "start": 28389,
                                                    "end": 28394
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 28368,
                                                    "end": 28388
                                                },
                                                "flags": 256,
                                                "start": 28368,
                                                "end": 28394
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2928,
                                                    "rawText": "2928",
                                                    "flags": 768,
                                                    "start": 28414,
                                                    "end": 28419
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 28395,
                                                    "end": 28413
                                                },
                                                "flags": 256,
                                                "start": 28395,
                                                "end": 28419
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 28255,
                                        "end": 28419
                                    },
                                    "flags": 256,
                                    "start": 28245,
                                    "end": 28429
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
                                                    "start": 28460,
                                                    "end": 28462
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 28440,
                                                    "end": 28459
                                                },
                                                "flags": 256,
                                                "start": 28440,
                                                "end": 28462
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 28485,
                                                    "end": 28487
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 28463,
                                                    "end": 28484
                                                },
                                                "flags": 256,
                                                "start": 28463,
                                                "end": 28487
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 28508,
                                                    "end": 28511
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 28488,
                                                    "end": 28507
                                                },
                                                "flags": 256,
                                                "start": 28488,
                                                "end": 28511
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 28533,
                                                    "end": 28592
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 28512,
                                                    "end": 28532
                                                },
                                                "flags": 256,
                                                "start": 28512,
                                                "end": 28592
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2927,
                                                    "rawText": "2927",
                                                    "flags": 768,
                                                    "start": 28614,
                                                    "end": 28619
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 28593,
                                                    "end": 28613
                                                },
                                                "flags": 256,
                                                "start": 28593,
                                                "end": 28619
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2928,
                                                    "rawText": "2928",
                                                    "flags": 768,
                                                    "start": 28639,
                                                    "end": 28644
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 28620,
                                                    "end": 28638
                                                },
                                                "flags": 256,
                                                "start": 28620,
                                                "end": 28644
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 28440,
                                        "end": 28644
                                    },
                                    "flags": 256,
                                    "start": 28430,
                                    "end": 28654
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 22657,
                            "end": 28654
                        },
                        "flags": 256,
                        "start": 22655,
                        "end": 28660
                    },
                    {
                        "kind": 201392131,
                        "text": "start",
                        "rawText": "start",
                        "flags": 769,
                        "start": 28661,
                        "end": 28673
                    }
                ],
                "flags": 256,
                "start": 22655,
                "end": 28673
            },
            "flags": 128,
            "start": 22655,
            "end": 28673
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
                        "start": 28674,
                        "end": 28676
                    },
                    {
                        "kind": 201392131,
                        "text": "end",
                        "rawText": "end",
                        "flags": 769,
                        "start": 28677,
                        "end": 28687
                    }
                ],
                "flags": 256,
                "start": 28674,
                "end": 28687
            },
            "flags": 128,
            "start": 28674,
            "end": 28687
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 2969,
                "rawText": "2969",
                "flags": 768,
                "start": 28688,
                "end": 28693
            },
            "flags": 128,
            "start": 28688,
            "end": 28693
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
                        "start": 28695,
                        "end": 28698
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Printed\n\n",
                        "rawText": "\n\n### Printed\n\n",
                        "flags": 768,
                        "start": 28698,
                        "end": 28715
                    },
                    "flags": 256,
                    "start": 28695,
                    "end": 28715
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 28715,
                    "end": 28717
                },
                "flags": 256,
                "start": 28695,
                "end": 28717
            },
            "flags": 128,
            "start": 28695,
            "end": 28717
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 28717,
                "end": 28727
            },
            "flags": 128,
            "start": 28717,
            "end": 28727
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 28727,
                "end": 28733
            },
            "flags": 128,
            "start": 28727,
            "end": 28733
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
                                    "start": 28744,
                                    "end": 28750
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 28750,
                                    "end": 28756
                                },
                                "flags": 256,
                                "start": 28744,
                                "end": 28756
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 28756,
                                "end": 28758
                            },
                            "flags": 256,
                            "start": 28744,
                            "end": 28758
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\r let a: number = 1\r",
                            "rawText": "js\r\n let a: number = 1\r\n",
                            "flags": 768,
                            "start": 28758,
                            "end": 28784
                        },
                        "flags": 256,
                        "start": 28744,
                        "end": 28784
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 28784,
                        "end": 28786
                    },
                    "flags": 256,
                    "start": 28744,
                    "end": 28786
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 28786,
                    "end": 28788
                },
                "flags": 256,
                "start": 28744,
                "end": 28788
            },
            "flags": 128,
            "start": 28744,
            "end": 28788
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 28794,
                "end": 28801
            },
            "flags": 128,
            "start": 28794,
            "end": 28801
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 28810,
                "end": 28817
            },
            "flags": 128,
            "start": 28810,
            "end": 28817
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
                            "start": 28817,
                            "end": 28821
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 28821,
                            "end": 28829
                        },
                        "flags": 256,
                        "start": 28817,
                        "end": 28829
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \" let a: number = 1\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": false,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 4,\r                                \"end\": 6\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 4202657,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 7,\r                                \"end\": 14\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 16,\r                                \"end\": 18\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 4,\r                            \"end\": 18\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 4,\r                    \"end\": 18\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 18\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 18\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 18\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \" let a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 4,\r\n                                \"end\": 6\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 7,\r\n                                \"end\": 14\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 16,\r\n                                \"end\": 18\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 4,\r\n                            \"end\": 18\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 4,\r\n                    \"end\": 18\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 18\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 18\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 18\r\n}\r\n",
                        "flags": 768,
                        "start": 28829,
                        "end": 31575
                    },
                    "flags": 256,
                    "start": 28817,
                    "end": 31575
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 31575,
                    "end": 31577
                },
                "flags": 256,
                "start": 28817,
                "end": 31577
            },
            "flags": 128,
            "start": 28817,
            "end": 31577
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
                            "start": 31584,
                            "end": 31592
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 31592,
                            "end": 31600
                        },
                        "flags": 256,
                        "start": 31584,
                        "end": 31600
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 31600,
                        "end": 31641
                    },
                    "flags": 256,
                    "start": 31584,
                    "end": 31641
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 31641,
                    "end": 31643
                },
                "flags": 256,
                "start": 31584,
                "end": 31643
            },
            "flags": 128,
            "start": 31584,
            "end": 31643
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
                                        "start": 31650,
                                        "end": 31662
                                    },
                                    "template": {
                                        "kind": 458761,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 768,
                                        "start": 31662,
                                        "end": 31670
                                    },
                                    "flags": 256,
                                    "start": 31650,
                                    "end": 31670
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "javascript\r\r",
                                    "rawText": "javascript\r\n\r\n",
                                    "flags": 768,
                                    "start": 31670,
                                    "end": 31686
                                },
                                "flags": 256,
                                "start": 31650,
                                "end": 31686
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 31686,
                                "end": 31688
                            },
                            "flags": 256,
                            "start": 31650,
                            "end": 31688
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 31688,
                            "end": 31694
                        },
                        "flags": 256,
                        "start": 31650,
                        "end": 31694
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Diagnostics\n\n",
                        "rawText": "\n\n### Diagnostics\n\n",
                        "flags": 768,
                        "start": 31694,
                        "end": 31715
                    },
                    "flags": 256,
                    "start": 31650,
                    "end": 31715
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 31715,
                    "end": 31717
                },
                "flags": 256,
                "start": 31650,
                "end": 31717
            },
            "flags": 128,
            "start": 31650,
            "end": 31717
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 31717,
                "end": 31727
            },
            "flags": 128,
            "start": 31717,
            "end": 31727
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 31727,
                "end": 31733
            },
            "flags": 128,
            "start": 31727,
            "end": 31733
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
                                    "start": 31744,
                                    "end": 31750
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 31750,
                                    "end": 31756
                                },
                                "flags": 256,
                                "start": 31744,
                                "end": 31756
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 31756,
                                "end": 31758
                            },
                            "flags": 256,
                            "start": 31744,
                            "end": 31758
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\r let a: number = 1\r",
                            "rawText": "js\r\n let a: number = 1\r\n",
                            "flags": 768,
                            "start": 31758,
                            "end": 31784
                        },
                        "flags": 256,
                        "start": 31744,
                        "end": 31784
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 31784,
                        "end": 31786
                    },
                    "flags": 256,
                    "start": 31744,
                    "end": 31786
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 31786,
                    "end": 31788
                },
                "flags": 256,
                "start": 31744,
                "end": 31788
            },
            "flags": 128,
            "start": 31744,
            "end": 31788
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 31794,
                "end": 31801
            },
            "flags": 128,
            "start": 31794,
            "end": 31801
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 31810,
                "end": 31817
            },
            "flags": 128,
            "start": 31810,
            "end": 31817
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
                            "start": 31817,
                            "end": 31821
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 31821,
                            "end": 31829
                        },
                        "flags": 256,
                        "start": 31817,
                        "end": 31829
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \" let a: number = 1\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": false,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 4,\r                                \"end\": 6\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 4202657,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 7,\r                                \"end\": 14\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 16,\r                                \"end\": 18\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 4,\r                            \"end\": 18\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 4,\r                    \"end\": 18\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 18\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 18\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 18\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \" let a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 4,\r\n                                \"end\": 6\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 7,\r\n                                \"end\": 14\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 16,\r\n                                \"end\": 18\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 4,\r\n                            \"end\": 18\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 4,\r\n                    \"end\": 18\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 18\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 18\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 18\r\n}\r\n",
                        "flags": 768,
                        "start": 31829,
                        "end": 34575
                    },
                    "flags": 256,
                    "start": 31817,
                    "end": 34575
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 34575,
                    "end": 34577
                },
                "flags": 256,
                "start": 31817,
                "end": 34577
            },
            "flags": 128,
            "start": 31817,
            "end": 34577
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
                            "start": 34584,
                            "end": 34592
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 34592,
                            "end": 34600
                        },
                        "flags": 256,
                        "start": 34584,
                        "end": 34600
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 34600,
                        "end": 34641
                    },
                    "flags": 256,
                    "start": 34584,
                    "end": 34641
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 34641,
                    "end": 34643
                },
                "flags": 256,
                "start": 34584,
                "end": 34643
            },
            "flags": 128,
            "start": 34584,
            "end": 34643
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
                                    "start": 34650,
                                    "end": 34662
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 34662,
                                    "end": 34670
                                },
                                "flags": 256,
                                "start": 34650,
                                "end": 34670
                            },
                            "template": {
                                "kind": 458761,
                                "text": "javascript\r\r",
                                "rawText": "javascript\r\n\r\n",
                                "flags": 768,
                                "start": 34670,
                                "end": 34686
                            },
                            "flags": 256,
                            "start": 34650,
                            "end": 34686
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 34686,
                            "end": 34688
                        },
                        "flags": 256,
                        "start": 34650,
                        "end": 34688
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 34688,
                        "end": 34694
                    },
                    "flags": 256,
                    "start": 34650,
                    "end": 34694
                },
                "template": {
                    "kind": 458761,
                    "text": "\n",
                    "rawText": "",
                    "flags": 768,
                    "start": 34694,
                    "end": 34696
                },
                "flags": 256,
                "start": 34650,
                "end": 34696
            },
            "flags": 128,
            "start": 34650,
            "end": 34696
        }
    ],
    "isModule": false,
    "text": "parser test case\r\n\r\n## Input\r\n\r\n`````js\r\n let a: number = 1\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \" let a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 4,\r\n                                \"end\": 6\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 7,\r\n                                \"end\": 14\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 16,\r\n                                \"end\": 18\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 4,\r\n                            \"end\": 18\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 4,\r\n                    \"end\": 18\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 18\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 18\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 18\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n\n## Output\n\n### Hybrid CST\n\n```javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\r let a: number = 1\\r\",\n                            \"rawText\": \"js\\r\\n let a: number = 1\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 62\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 62\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 62,\n                        \"end\": 64\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 64\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 64,\n                    \"end\": 66\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 66\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 66\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 72,\n                \"end\": 79\n            },\n            \"flags\": 128,\n            \"start\": 72,\n            \"end\": 79\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 88,\n                \"end\": 95\n            },\n            \"flags\": 128,\n            \"start\": 88,\n            \"end\": 95\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 95,\n                            \"end\": 99\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 99,\n                            \"end\": 107\n                        },\n                        \"flags\": 256,\n                        \"start\": 95,\n                        \"end\": 107\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\" let a: number = 1\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 142,\\r                \\\"isConst\\\": false,\\r                \\\"binding\\\": {\\r                    \\\"kind\\\": 31,\\r                    \\\"bindingList\\\": [\\r                        {\\r                            \\\"kind\\\": 141,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"a\\\",\\r                                \\\"rawText\\\": \\\"a\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 4,\\r                                \\\"end\\\": 6\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": {\\r                                \\\"kind\\\": 4202657,\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 2097152,\\r                                \\\"start\\\": 7,\\r                                \\\"end\\\": 14\\r                            },\\r                            \\\"initializer\\\": {\\r                                \\\"kind\\\": 4261540,\\r                                \\\"text\\\": 1,\\r                                \\\"rawText\\\": \\\"1\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 0,\\r                                \\\"start\\\": 16,\\r                                \\\"end\\\": 18\\r                            },\\r                            \\\"flags\\\": 0,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 4,\\r                            \\\"end\\\": 18\\r                        }\\r                    ],\\r                    \\\"flags\\\": 16,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 4,\\r                    \\\"end\\\": 18\\r                },\\r                \\\"flags\\\": 16,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 769,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 18\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 18\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 18\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\" let a: number = 1\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 142,\\r\\n                \\\"isConst\\\": false,\\r\\n                \\\"binding\\\": {\\r\\n                    \\\"kind\\\": 31,\\r\\n                    \\\"bindingList\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 141,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"a\\\",\\r\\n                                \\\"rawText\\\": \\\"a\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 4,\\r\\n                                \\\"end\\\": 6\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": {\\r\\n                                \\\"kind\\\": 4202657,\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 2097152,\\r\\n                                \\\"start\\\": 7,\\r\\n                                \\\"end\\\": 14\\r\\n                            },\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 4261540,\\r\\n                                \\\"text\\\": 1,\\r\\n                                \\\"rawText\\\": \\\"1\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 16,\\r\\n                                \\\"end\\\": 18\\r\\n                            },\\r\\n                            \\\"flags\\\": 0,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 4,\\r\\n                            \\\"end\\\": 18\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 16,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 4,\\r\\n                    \\\"end\\\": 18\\r\\n                },\\r\\n                \\\"flags\\\": 16,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 769,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 18\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 18\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 18\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 107,\n                        \"end\": 2853\n                    },\n                    \"flags\": 256,\n                    \"start\": 95,\n                    \"end\": 2853\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2853,\n                    \"end\": 2855\n                },\n                \"flags\": 256,\n                \"start\": 95,\n                \"end\": 2855\n            },\n            \"flags\": 128,\n            \"start\": 95,\n            \"end\": 2855\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 2862,\n                            \"end\": 2870\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2870,\n                            \"end\": 2878\n                        },\n                        \"flags\": 256,\n                        \"start\": 2862,\n                        \"end\": 2878\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2878,\n                        \"end\": 2919\n                    },\n                    \"flags\": 256,\n                    \"start\": 2862,\n                    \"end\": 2919\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2919,\n                    \"end\": 2921\n                },\n                \"flags\": 256,\n                \"start\": 2862,\n                \"end\": 2921\n            },\n            \"flags\": 128,\n            \"start\": 2862,\n            \"end\": 2921\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 2928,\n                            \"end\": 2940\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2940,\n                            \"end\": 2948\n                        },\n                        \"flags\": 256,\n                        \"start\": 2928,\n                        \"end\": 2948\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2948,\n                        \"end\": 2964\n                    },\n                    \"flags\": 256,\n                    \"start\": 2928,\n                    \"end\": 2964\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2964,\n                    \"end\": 2966\n                },\n                \"flags\": 256,\n                \"start\": 2928,\n                \"end\": 2966\n            },\n            \"flags\": 128,\n            \"start\": 2928,\n            \"end\": 2966\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n`````js\\r\\n let a: number = 1\\r\\n`````\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n```javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\" let a: number = 1\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 142,\\r\\n                \\\"isConst\\\": false,\\r\\n                \\\"binding\\\": {\\r\\n                    \\\"kind\\\": 31,\\r\\n                    \\\"bindingList\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 141,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"a\\\",\\r\\n                                \\\"rawText\\\": \\\"a\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 4,\\r\\n                                \\\"end\\\": 6\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": {\\r\\n                                \\\"kind\\\": 4202657,\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 2097152,\\r\\n                                \\\"start\\\": 7,\\r\\n                                \\\"end\\\": 14\\r\\n                            },\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 4261540,\\r\\n                                \\\"text\\\": 1,\\r\\n                                \\\"rawText\\\": \\\"1\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 16,\\r\\n                                \\\"end\\\": 18\\r\\n                            },\\r\\n                            \\\"flags\\\": 0,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 4,\\r\\n                            \\\"end\\\": 18\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 16,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 4,\\r\\n                    \\\"end\\\": 18\\r\\n                },\\r\\n                \\\"flags\\\": 16,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 769,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 18\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 18\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 18\\r\\n}\\r\\n```\\r\\n\\r\\n### Printed\\r\\n\\r\\n\\r\\n```javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n```\\r\\n\\r\\n### Diagnostics\\r\\n\\r\\n\\r\\n```javascript\\r\\n\\r\\n```\\r\\n\\r\",\n    \"fileName\": \"__root__\",\n    \"flags\": 0,\n    \"diagnostics\": [\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 5,\n            \"error\": \"Statement expected\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 66,\n            \"end\": 71\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 66,\n            \"end\": 71\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 71,\n            \"end\": 72\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 71,\n            \"end\": 72\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 79,\n            \"end\": 86\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 79,\n            \"end\": 86\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 86,\n            \"end\": 87\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 86,\n            \"end\": 87\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 87,\n            \"end\": 88\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 87,\n            \"end\": 88\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 95,\n            \"end\": 99\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2855,\n            \"end\": 2860\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2855,\n            \"end\": 2860\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2860,\n            \"end\": 2861\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2860,\n            \"end\": 2861\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2861,\n            \"end\": 2862\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2861,\n            \"end\": 2862\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2921,\n            \"end\": 2926\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2921,\n            \"end\": 2926\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2926,\n            \"end\": 2927\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2926,\n            \"end\": 2927\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2927,\n            \"end\": 2928\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2927,\n            \"end\": 2928\n        }\n    ],\n    \"start\": 0,\n    \"end\": 2969\n}\n```\n\n### Printed\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\n let a: number = 1\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \" let a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 4,\r\n                                \"end\": 6\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 7,\r\n                                \"end\": 14\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 16,\r\n                                \"end\": 18\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 4,\r\n                            \"end\": 18\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 4,\r\n                    \"end\": 18\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 18\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 18\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 18\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n\n### Diagnostics\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\n let a: number = 1\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \" let a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": false,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 4,\r\n                                \"end\": 6\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 7,\r\n                                \"end\": 14\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 16,\r\n                                \"end\": 18\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 4,\r\n                            \"end\": 18\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 4,\r\n                    \"end\": 18\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 18\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 18\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 18\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n",
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
            "start": 66,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 66,
            "end": 71
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 71,
            "end": 72
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 71,
            "end": 72
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 79,
            "end": 86
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 79,
            "end": 86
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 86,
            "end": 87
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 86,
            "end": 87
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 87,
            "end": 88
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 87,
            "end": 88
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 95,
            "end": 99
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2855,
            "end": 2860
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2855,
            "end": 2860
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2860,
            "end": 2861
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2860,
            "end": 2861
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2861,
            "end": 2862
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2861,
            "end": 2862
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2921,
            "end": 2926
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2921,
            "end": 2926
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2926,
            "end": 2927
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2926,
            "end": 2927
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2927,
            "end": 2928
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2927,
            "end": 2928
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2966,
            "end": 2972
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2966,
            "end": 2972
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2972,
            "end": 2973
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2972,
            "end": 2973
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2980,
            "end": 2983
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2980,
            "end": 2983
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2983,
            "end": 2984
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2983,
            "end": 2984
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2984,
            "end": 2985
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2984,
            "end": 2985
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2992,
            "end": 2996
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19301,
            "end": 19303
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19301,
            "end": 19303
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19303,
            "end": 19303
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19303,
            "end": 19304
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19303,
            "end": 19304
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19304,
            "end": 19305
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19305,
            "end": 19305
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19305,
            "end": 19306
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19305,
            "end": 19306
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19307,
            "end": 19311
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19323,
            "end": 19325
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19325,
            "end": 19325
        },
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 19325,
            "end": 19326
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19325,
            "end": 19326
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19325,
            "end": 19326
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19326,
            "end": 19327
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19327,
            "end": 19327
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19327,
            "end": 19328
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19327,
            "end": 19328
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19392,
            "end": 19402
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19392,
            "end": 19402
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19402,
            "end": 19402
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19402,
            "end": 19403
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19402,
            "end": 19403
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19403,
            "end": 19404
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19404,
            "end": 19404
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19404,
            "end": 19405
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19404,
            "end": 19405
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19406,
            "end": 19407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19407,
            "end": 19407
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19407,
            "end": 19408
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19407,
            "end": 19408
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19408,
            "end": 19409
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19409,
            "end": 19409
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19409,
            "end": 19410
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19409,
            "end": 19410
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19411,
            "end": 19415
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19411,
            "end": 19416
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19411,
            "end": 19416
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22607,
            "end": 22608
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 22607,
            "end": 22608
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22632,
            "end": 22633
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 22632,
            "end": 22633
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22654,
            "end": 22655
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 22654,
            "end": 22655
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28673,
            "end": 28674
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28673,
            "end": 28674
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28687,
            "end": 28688
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28687,
            "end": 28688
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28693,
            "end": 28695
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28717,
            "end": 28727
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28733,
            "end": 28738
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28733,
            "end": 28738
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28738,
            "end": 28743
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28738,
            "end": 28743
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28743,
            "end": 28744
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28743,
            "end": 28744
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28788,
            "end": 28793
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28788,
            "end": 28793
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28793,
            "end": 28794
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28793,
            "end": 28794
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28801,
            "end": 28808
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28801,
            "end": 28808
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28808,
            "end": 28809
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28808,
            "end": 28809
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28809,
            "end": 28810
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28809,
            "end": 28810
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28817,
            "end": 28821
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31577,
            "end": 31582
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31577,
            "end": 31582
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31582,
            "end": 31583
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31582,
            "end": 31583
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31583,
            "end": 31584
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31583,
            "end": 31584
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31643,
            "end": 31648
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31643,
            "end": 31648
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31648,
            "end": 31649
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31648,
            "end": 31649
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31649,
            "end": 31650
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31649,
            "end": 31650
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31717,
            "end": 31727
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31733,
            "end": 31738
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31733,
            "end": 31738
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31738,
            "end": 31743
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31738,
            "end": 31743
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31743,
            "end": 31744
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31743,
            "end": 31744
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31788,
            "end": 31793
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31788,
            "end": 31793
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31793,
            "end": 31794
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31793,
            "end": 31794
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31801,
            "end": 31808
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31801,
            "end": 31808
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31808,
            "end": 31809
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31808,
            "end": 31809
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31809,
            "end": 31810
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31809,
            "end": 31810
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31817,
            "end": 31821
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34577,
            "end": 34582
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34577,
            "end": 34582
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34582,
            "end": 34583
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34582,
            "end": 34583
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34583,
            "end": 34584
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34583,
            "end": 34584
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34643,
            "end": 34648
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34643,
            "end": 34648
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34648,
            "end": 34649
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34648,
            "end": 34649
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34649,
            "end": 34650
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34649,
            "end": 34650
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34694,
            "end": 34696
        }
    ],
    "start": 0,
    "end": 34696
}
```

### Printed

```javascript
 test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
 let a: number = 1@{xd}@
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
    "source": " let a: number = 1",@{xd}@
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
                                "start": 4,@{xd}@
                                "end": 6@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 4202657,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 7,@{xd}@
                                "end": 14@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 16,@{xd}@
                                "end": 18@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 4,@{xd}@
                            "end": 18@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 4,@{xd}@
                    "end": 18@{xd}@
                },@{xd}@
                "flags": 16,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 0,@{xd}@
                "end": 18@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 18@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 18@{xd}@
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
 let a: number = 1@{xd}@
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
    "source": " let a: number = 1",@{xd}@
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
                                "start": 4,@{xd}@
                                "end": 6@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 4202657,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 7,@{xd}@
                                "end": 14@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 16,@{xd}@
                                "end": 18@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 4,@{xd}@
                            "end": 18@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 4,@{xd}@
                    "end": 18@{xd}@
                },@{xd}@
                "flags": 16,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 0,@{xd}@
                "end": 18@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 18@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 18@{xd}@
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

