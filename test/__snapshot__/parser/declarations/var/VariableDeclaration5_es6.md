# Kataw parser test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
const a: number = 1@{xd}@
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
    "source": "const a: number = 1",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": true,@{xd}@
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
                                "start": 5,@{xd}@
                                "end": 7@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 4202657,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 8,@{xd}@
                                "end": 15@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 17,@{xd}@
                                "end": 19@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 5,@{xd}@
                            "end": 19@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 5,@{xd}@
                    "end": 19@{xd}@
                },@{xd}@
                "flags": 16,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 0,@{xd}@
                "end": 19@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 19@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 19@{xd}@
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
                            "text": "js\rconst a: number = 1\r",
                            "rawText": "js\r\nconst a: number = 1\r\n",
                            "flags": 768,
                            "start": 36,
                            "end": 63
                        },
                        "flags": 256,
                        "start": 22,
                        "end": 63
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 63,
                        "end": 65
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 65
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 65,
                    "end": 67
                },
                "flags": 256,
                "start": 22,
                "end": 67
            },
            "flags": 128,
            "start": 22,
            "end": 67
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 73,
                "end": 80
            },
            "flags": 128,
            "start": 73,
            "end": 80
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 89,
                "end": 96
            },
            "flags": 128,
            "start": 89,
            "end": 96
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
                            "start": 96,
                            "end": 100
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 100,
                            "end": 108
                        },
                        "flags": 256,
                        "start": 96,
                        "end": 108
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"const a: number = 1\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": true,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 5,\r                                \"end\": 7\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 4202657,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 8,\r                                \"end\": 15\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 17,\r                                \"end\": 19\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 5,\r                            \"end\": 19\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 5,\r                    \"end\": 19\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 19\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 19\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 19\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"const a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 5,\r\n                                \"end\": 7\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 8,\r\n                                \"end\": 15\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 17,\r\n                                \"end\": 19\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 5,\r\n                            \"end\": 19\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 5,\r\n                    \"end\": 19\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 19\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 19\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 19\r\n}\r\n",
                        "flags": 768,
                        "start": 108,
                        "end": 2854
                    },
                    "flags": 256,
                    "start": 96,
                    "end": 2854
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 2854,
                    "end": 2856
                },
                "flags": 256,
                "start": 96,
                "end": 2856
            },
            "flags": 128,
            "start": 96,
            "end": 2856
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
                            "start": 2863,
                            "end": 2871
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 2871,
                            "end": 2879
                        },
                        "flags": 256,
                        "start": 2863,
                        "end": 2879
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 2879,
                        "end": 2920
                    },
                    "flags": 256,
                    "start": 2863,
                    "end": 2920
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 2920,
                    "end": 2922
                },
                "flags": 256,
                "start": 2863,
                "end": 2922
            },
            "flags": 128,
            "start": 2863,
            "end": 2922
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
                            "start": 2929,
                            "end": 2941
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 2941,
                            "end": 2949
                        },
                        "flags": 256,
                        "start": 2929,
                        "end": 2949
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r\r",
                        "rawText": "javascript\r\n\r\n",
                        "flags": 768,
                        "start": 2949,
                        "end": 2965
                    },
                    "flags": 256,
                    "start": 2929,
                    "end": 2965
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 2965,
                    "end": 2967
                },
                "flags": 256,
                "start": 2929,
                "end": 2967
            },
            "flags": 128,
            "start": 2929,
            "end": 2967
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 2974,
                "end": 2981
            },
            "flags": 128,
            "start": 2974,
            "end": 2981
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 2986,
                "end": 2993
            },
            "flags": 128,
            "start": 2986,
            "end": 2993
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
                                "start": 2993,
                                "end": 2997
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 2997,
                                "end": 3001
                            },
                            "flags": 256,
                            "start": 2993,
                            "end": 3001
                        },
                        "template": {
                            "kind": 458761,
                            "text": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\rconst a: number = 1\r\",\n                            \"rawText\": \"js\r\nconst a: number = 1\r\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 63\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 63\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 63,\n                        \"end\": 65\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 65\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 65,\n                    \"end\": 67\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 67\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 67\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 73,\n                \"end\": 80\n            },\n            \"flags\": 128,\n            \"start\": 73,\n            \"end\": 80\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 89,\n                \"end\": 96\n            },\n            \"flags\": 128,\n            \"start\": 89,\n            \"end\": 96\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 96,\n                            \"end\": 100\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 100,\n                            \"end\": 108\n                        },\n                        \"flags\": 256,\n                        \"start\": 96,\n                        \"end\": 108\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r{\r    \"kind\": 196,\r    \"source\": \"const a: number = 1\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": true,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 5,\r                                \"end\": 7\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 4202657,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 8,\r                                \"end\": 15\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 17,\r                                \"end\": 19\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 5,\r                            \"end\": 19\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 5,\r                    \"end\": 19\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 19\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 19\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 19\r}\r\",\n                        \"rawText\": \"javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"const a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 5,\r\n                                \"end\": 7\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 8,\r\n                                \"end\": 15\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 17,\r\n                                \"end\": 19\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 5,\r\n                            \"end\": 19\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 5,\r\n                    \"end\": 19\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 19\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 19\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 19\r\n}\r\n\",\n                        \"flags\": 768,\n                        \"start\": 108,\n                        \"end\": 2854\n                    },\n                    \"flags\": 256,\n                    \"start\": 96,\n                    \"end\": 2854\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2854,\n                    \"end\": 2856\n                },\n                \"flags\": 256,\n                \"start\": 96,\n                \"end\": 2856\n            },\n            \"flags\": 128,\n            \"start\": 96,\n            \"end\": 2856\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 2863,\n                            \"end\": 2871\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2871,\n                            \"end\": 2879\n                        },\n                        \"flags\": 256,\n                        \"start\": 2863,\n                        \"end\": 2879\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r@{x2716}@ Soon to be open sourced\r\",\n                        \"rawText\": \"javascript\r\n@{x2716}@ Soon to be open sourced\r\n\",\n                        \"flags\": 768,\n                        \"start\": 2879,\n                        \"end\": 2920\n                    },\n                    \"flags\": 256,\n                    \"start\": 2863,\n                    \"end\": 2920\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2920,\n                    \"end\": 2922\n                },\n                \"flags\": 256,\n                \"start\": 2863,\n                \"end\": 2922\n            },\n            \"flags\": 128,\n            \"start\": 2863,\n            \"end\": 2922\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 2929,\n                            \"end\": 2941\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2941,\n                            \"end\": 2949\n                        },\n                        \"flags\": 256,\n                        \"start\": 2929,\n                        \"end\": 2949\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\r\r\",\n                        \"rawText\": \"javascript\r\n\r\n\",\n                        \"flags\": 768,\n                        \"start\": 2949,\n                        \"end\": 2965\n                    },\n                    \"flags\": 256,\n                    \"start\": 2929,\n                    \"end\": 2965\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2965,\n                    \"end\": 2967\n                },\n                \"flags\": 256,\n                \"start\": 2929,\n                \"end\": 2967\n            },\n            \"flags\": 128,\n            \"start\": 2929,\n            \"end\": 2967\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\r\n\r\n## Input\r\n\r\n",
                            "rawText": "javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\rconst a: number = 1\\r\",\n                            \"rawText\": \"js\\r\\nconst a: number = 1\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 63\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 63\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 63,\n                        \"end\": 65\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 65\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 65,\n                    \"end\": 67\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 67\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 67\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 73,\n                \"end\": 80\n            },\n            \"flags\": 128,\n            \"start\": 73,\n            \"end\": 80\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 89,\n                \"end\": 96\n            },\n            \"flags\": 128,\n            \"start\": 89,\n            \"end\": 96\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 96,\n                            \"end\": 100\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 100,\n                            \"end\": 108\n                        },\n                        \"flags\": 256,\n                        \"start\": 96,\n                        \"end\": 108\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\"const a: number = 1\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 142,\\r                \\\"isConst\\\": true,\\r                \\\"binding\\\": {\\r                    \\\"kind\\\": 31,\\r                    \\\"bindingList\\\": [\\r                        {\\r                            \\\"kind\\\": 141,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"a\\\",\\r                                \\\"rawText\\\": \\\"a\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 5,\\r                                \\\"end\\\": 7\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": {\\r                                \\\"kind\\\": 4202657,\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 2097152,\\r                                \\\"start\\\": 8,\\r                                \\\"end\\\": 15\\r                            },\\r                            \\\"initializer\\\": {\\r                                \\\"kind\\\": 4261540,\\r                                \\\"text\\\": 1,\\r                                \\\"rawText\\\": \\\"1\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 0,\\r                                \\\"start\\\": 17,\\r                                \\\"end\\\": 19\\r                            },\\r                            \\\"flags\\\": 0,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 5,\\r                            \\\"end\\\": 19\\r                        }\\r                    ],\\r                    \\\"flags\\\": 16,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 5,\\r                    \\\"end\\\": 19\\r                },\\r                \\\"flags\\\": 16,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 769,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 19\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 19\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 19\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"const a: number = 1\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 142,\\r\\n                \\\"isConst\\\": true,\\r\\n                \\\"binding\\\": {\\r\\n                    \\\"kind\\\": 31,\\r\\n                    \\\"bindingList\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 141,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"a\\\",\\r\\n                                \\\"rawText\\\": \\\"a\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 5,\\r\\n                                \\\"end\\\": 7\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": {\\r\\n                                \\\"kind\\\": 4202657,\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 2097152,\\r\\n                                \\\"start\\\": 8,\\r\\n                                \\\"end\\\": 15\\r\\n                            },\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 4261540,\\r\\n                                \\\"text\\\": 1,\\r\\n                                \\\"rawText\\\": \\\"1\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 17,\\r\\n                                \\\"end\\\": 19\\r\\n                            },\\r\\n                            \\\"flags\\\": 0,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 5,\\r\\n                            \\\"end\\\": 19\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 16,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 5,\\r\\n                    \\\"end\\\": 19\\r\\n                },\\r\\n                \\\"flags\\\": 16,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 769,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 19\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 19\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 19\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 108,\n                        \"end\": 2854\n                    },\n                    \"flags\": 256,\n                    \"start\": 96,\n                    \"end\": 2854\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2854,\n                    \"end\": 2856\n                },\n                \"flags\": 256,\n                \"start\": 96,\n                \"end\": 2856\n            },\n            \"flags\": 128,\n            \"start\": 96,\n            \"end\": 2856\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 2863,\n                            \"end\": 2871\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2871,\n                            \"end\": 2879\n                        },\n                        \"flags\": 256,\n                        \"start\": 2863,\n                        \"end\": 2879\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2879,\n                        \"end\": 2920\n                    },\n                    \"flags\": 256,\n                    \"start\": 2863,\n                    \"end\": 2920\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2920,\n                    \"end\": 2922\n                },\n                \"flags\": 256,\n                \"start\": 2863,\n                \"end\": 2922\n            },\n            \"flags\": 128,\n            \"start\": 2863,\n            \"end\": 2922\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 2929,\n                            \"end\": 2941\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2941,\n                            \"end\": 2949\n                        },\n                        \"flags\": 256,\n                        \"start\": 2929,\n                        \"end\": 2949\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2949,\n                        \"end\": 2965\n                    },\n                    \"flags\": 256,\n                    \"start\": 2929,\n                    \"end\": 2965\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2965,\n                    \"end\": 2967\n                },\n                \"flags\": 256,\n                \"start\": 2929,\n                \"end\": 2967\n            },\n            \"flags\": 128,\n            \"start\": 2929,\n            \"end\": 2967\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n",
                            "flags": 768,
                            "start": 3001,
                            "end": 19302
                        },
                        "flags": 256,
                        "start": 2993,
                        "end": 19302
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 19302,
                        "end": 19304
                    },
                    "flags": 256,
                    "start": 2993,
                    "end": 19304
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 19304,
                    "end": 19306
                },
                "flags": 256,
                "start": 2993,
                "end": 19306
            },
            "flags": 128,
            "start": 2993,
            "end": 19306
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "js",
                "rawText": "js",
                "flags": 768,
                "start": 19306,
                "end": 19308
            },
            "flags": 128,
            "start": 19306,
            "end": 19308
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 19309,
                "end": 19310
            },
            "flags": 128,
            "start": 19309,
            "end": 19310
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "nconst",
                "rawText": "nconst",
                "flags": 768,
                "start": 19311,
                "end": 19317
            },
            "flags": 128,
            "start": 19311,
            "end": 19317
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 19317,
                "end": 19319
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "number",
                        "rawText": "number",
                        "flags": 768,
                        "start": 19320,
                        "end": 19327
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 768,
                        "start": 19327,
                        "end": 19329
                    },
                    "right": {
                        "kind": 134299649,
                        "text": 1,
                        "rawText": "1",
                        "flags": 768,
                        "start": 19329,
                        "end": 19331
                    },
                    "flags": 256,
                    "start": 19320,
                    "end": 19331
                },
                "flags": 128,
                "start": 19320,
                "end": 19331
            },
            "flags": 128,
            "start": 19317,
            "end": 19331
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 19332,
                "end": 19333
            },
            "flags": 128,
            "start": 19332,
            "end": 19333
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
                                "start": 19334,
                                "end": 19335
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 19335,
                                "end": 19337
                            },
                            "flags": 256,
                            "start": 19334,
                            "end": 19337
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 19337,
                            "end": 19339
                        },
                        "flags": 256,
                        "start": 19334,
                        "end": 19339
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n",
                        "rawText": "\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n",
                        "flags": 768,
                        "start": 19339,
                        "end": 19396
                    },
                    "flags": 256,
                    "start": 19334,
                    "end": 19396
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 19396,
                    "end": 19398
                },
                "flags": 256,
                "start": 19334,
                "end": 19398
            },
            "flags": 128,
            "start": 19334,
            "end": 19398
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 19398,
                "end": 19408
            },
            "flags": 128,
            "start": 19398,
            "end": 19408
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 19409,
                "end": 19410
            },
            "flags": 128,
            "start": 19409,
            "end": 19410
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 19411,
                "end": 19412
            },
            "flags": 128,
            "start": 19411,
            "end": 19412
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 19413,
                "end": 19413
            },
            "flags": 128,
            "start": 19412,
            "end": 19413
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "r",
                "rawText": "r",
                "flags": 768,
                "start": 19414,
                "end": 19415
            },
            "flags": 128,
            "start": 19414,
            "end": 19415
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 19416,
                "end": 19417
            },
            "flags": 128,
            "start": 19416,
            "end": 19417
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392131,
                        "text": "kind\": 196,\r\n    \"source\": \"const a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 5,\r\n                                \"end\": 7\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 8,\r\n                                \"end\": 15\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 17,\r\n                                \"end\": 19\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 5,\r\n                            \"end\": 19\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 5,\r\n                    \"end\": 19\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 19\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 19\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 19\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "rawText": "kind\": 196,\r\n    \"source\": \"const a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 5,\r\n                                \"end\": 7\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 8,\r\n                                \"end\": 15\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 17,\r\n                                \"end\": 19\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 5,\r\n                            \"end\": 19\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 5,\r\n                    \"end\": 19\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 19\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 19\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 19\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
                        "flags": 768,
                        "start": 19422,
                        "end": 22597
                    },
                    {
                        "kind": 201392131,
                        "text": "fileName",
                        "rawText": "fileName",
                        "flags": 769,
                        "start": 22598,
                        "end": 22613
                    }
                ],
                "flags": 256,
                "start": 19422,
                "end": 22613
            },
            "flags": 128,
            "start": 19422,
            "end": 22613
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
                        "start": 22614,
                        "end": 22625
                    },
                    {
                        "kind": 201392131,
                        "text": "flags",
                        "rawText": "flags",
                        "flags": 769,
                        "start": 22626,
                        "end": 22638
                    }
                ],
                "flags": 256,
                "start": 22614,
                "end": 22638
            },
            "flags": 128,
            "start": 22614,
            "end": 22638
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
                        "start": 22639,
                        "end": 22641
                    },
                    {
                        "kind": 201392131,
                        "text": "diagnostics",
                        "rawText": "diagnostics",
                        "flags": 769,
                        "start": 22642,
                        "end": 22660
                    }
                ],
                "flags": 256,
                "start": 22639,
                "end": 22660
            },
            "flags": 128,
            "start": 22639,
            "end": 22660
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
                                                    "start": 22693,
                                                    "end": 22695
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 22673,
                                                    "end": 22692
                                                },
                                                "flags": 256,
                                                "start": 22673,
                                                "end": 22695
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 22718,
                                                    "end": 22720
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22696,
                                                    "end": 22717
                                                },
                                                "flags": 256,
                                                "start": 22696,
                                                "end": 22720
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 22741,
                                                    "end": 22743
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 22721,
                                                    "end": 22740
                                                },
                                                "flags": 256,
                                                "start": 22721,
                                                "end": 22743
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 22765,
                                                    "end": 22785
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 22744,
                                                    "end": 22764
                                                },
                                                "flags": 256,
                                                "start": 22744,
                                                "end": 22785
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 6,
                                                    "rawText": "6",
                                                    "flags": 768,
                                                    "start": 22807,
                                                    "end": 22809
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 22786,
                                                    "end": 22806
                                                },
                                                "flags": 256,
                                                "start": 22786,
                                                "end": 22809
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 22829,
                                                    "end": 22832
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 22810,
                                                    "end": 22828
                                                },
                                                "flags": 256,
                                                "start": 22810,
                                                "end": 22832
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 22673,
                                        "end": 22832
                                    },
                                    "flags": 256,
                                    "start": 22663,
                                    "end": 22842
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
                                                    "start": 22873,
                                                    "end": 22875
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 22853,
                                                    "end": 22872
                                                },
                                                "flags": 256,
                                                "start": 22853,
                                                "end": 22875
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 22898,
                                                    "end": 22900
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 22876,
                                                    "end": 22897
                                                },
                                                "flags": 256,
                                                "start": 22876,
                                                "end": 22900
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 22921,
                                                    "end": 22923
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 22901,
                                                    "end": 22920
                                                },
                                                "flags": 256,
                                                "start": 22901,
                                                "end": 22923
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 22945,
                                                    "end": 22965
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 22924,
                                                    "end": 22944
                                                },
                                                "flags": 256,
                                                "start": 22924,
                                                "end": 22965
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 22987,
                                                    "end": 22990
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 22966,
                                                    "end": 22986
                                                },
                                                "flags": 256,
                                                "start": 22966,
                                                "end": 22990
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 23010,
                                                    "end": 23013
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 22991,
                                                    "end": 23009
                                                },
                                                "flags": 256,
                                                "start": 22991,
                                                "end": 23013
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 22853,
                                        "end": 23013
                                    },
                                    "flags": 256,
                                    "start": 22843,
                                    "end": 23023
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
                                                    "start": 23054,
                                                    "end": 23056
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23034,
                                                    "end": 23053
                                                },
                                                "flags": 256,
                                                "start": 23034,
                                                "end": 23056
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23079,
                                                    "end": 23081
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23057,
                                                    "end": 23078
                                                },
                                                "flags": 256,
                                                "start": 23057,
                                                "end": 23081
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 5,
                                                    "rawText": "5",
                                                    "flags": 768,
                                                    "start": 23102,
                                                    "end": 23104
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23082,
                                                    "end": 23101
                                                },
                                                "flags": 256,
                                                "start": 23082,
                                                "end": 23104
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Statement expected",
                                                    "rawText": "Statement expected",
                                                    "flags": 768,
                                                    "start": 23126,
                                                    "end": 23147
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23105,
                                                    "end": 23125
                                                },
                                                "flags": 256,
                                                "start": 23105,
                                                "end": 23147
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 11,
                                                    "rawText": "11",
                                                    "flags": 768,
                                                    "start": 23169,
                                                    "end": 23172
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23148,
                                                    "end": 23168
                                                },
                                                "flags": 256,
                                                "start": 23148,
                                                "end": 23172
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 23192,
                                                    "end": 23195
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23173,
                                                    "end": 23191
                                                },
                                                "flags": 256,
                                                "start": 23173,
                                                "end": 23195
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23034,
                                        "end": 23195
                                    },
                                    "flags": 256,
                                    "start": 23024,
                                    "end": 23205
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
                                                    "start": 23236,
                                                    "end": 23238
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23216,
                                                    "end": 23235
                                                },
                                                "flags": 256,
                                                "start": 23216,
                                                "end": 23238
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23261,
                                                    "end": 23263
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23239,
                                                    "end": 23260
                                                },
                                                "flags": 256,
                                                "start": 23239,
                                                "end": 23263
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 23284,
                                                    "end": 23286
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23264,
                                                    "end": 23283
                                                },
                                                "flags": 256,
                                                "start": 23264,
                                                "end": 23286
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 23308,
                                                    "end": 23328
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23287,
                                                    "end": 23307
                                                },
                                                "flags": 256,
                                                "start": 23287,
                                                "end": 23328
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 23350,
                                                    "end": 23353
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23329,
                                                    "end": 23349
                                                },
                                                "flags": 256,
                                                "start": 23329,
                                                "end": 23353
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 23373,
                                                    "end": 23376
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23354,
                                                    "end": 23372
                                                },
                                                "flags": 256,
                                                "start": 23354,
                                                "end": 23376
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23216,
                                        "end": 23376
                                    },
                                    "flags": 256,
                                    "start": 23206,
                                    "end": 23386
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
                                                    "start": 23417,
                                                    "end": 23419
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23397,
                                                    "end": 23416
                                                },
                                                "flags": 256,
                                                "start": 23397,
                                                "end": 23419
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23442,
                                                    "end": 23444
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23420,
                                                    "end": 23441
                                                },
                                                "flags": 256,
                                                "start": 23420,
                                                "end": 23444
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 23465,
                                                    "end": 23468
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23445,
                                                    "end": 23464
                                                },
                                                "flags": 256,
                                                "start": 23445,
                                                "end": 23468
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 23490,
                                                    "end": 23549
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23469,
                                                    "end": 23489
                                                },
                                                "flags": 256,
                                                "start": 23469,
                                                "end": 23549
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 16,
                                                    "rawText": "16",
                                                    "flags": 768,
                                                    "start": 23571,
                                                    "end": 23574
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23550,
                                                    "end": 23570
                                                },
                                                "flags": 256,
                                                "start": 23550,
                                                "end": 23574
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 23594,
                                                    "end": 23597
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23575,
                                                    "end": 23593
                                                },
                                                "flags": 256,
                                                "start": 23575,
                                                "end": 23597
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23397,
                                        "end": 23597
                                    },
                                    "flags": 256,
                                    "start": 23387,
                                    "end": 23607
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
                                                    "start": 23638,
                                                    "end": 23640
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23618,
                                                    "end": 23637
                                                },
                                                "flags": 256,
                                                "start": 23618,
                                                "end": 23640
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23663,
                                                    "end": 23665
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23641,
                                                    "end": 23662
                                                },
                                                "flags": 256,
                                                "start": 23641,
                                                "end": 23665
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 23686,
                                                    "end": 23688
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23666,
                                                    "end": 23685
                                                },
                                                "flags": 256,
                                                "start": 23666,
                                                "end": 23688
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 23710,
                                                    "end": 23730
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23689,
                                                    "end": 23709
                                                },
                                                "flags": 256,
                                                "start": 23689,
                                                "end": 23730
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 23752,
                                                    "end": 23755
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23731,
                                                    "end": 23751
                                                },
                                                "flags": 256,
                                                "start": 23731,
                                                "end": 23755
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 23775,
                                                    "end": 23778
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23756,
                                                    "end": 23774
                                                },
                                                "flags": 256,
                                                "start": 23756,
                                                "end": 23778
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23618,
                                        "end": 23778
                                    },
                                    "flags": 256,
                                    "start": 23608,
                                    "end": 23788
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
                                                    "start": 23819,
                                                    "end": 23821
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 23799,
                                                    "end": 23818
                                                },
                                                "flags": 256,
                                                "start": 23799,
                                                "end": 23821
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 23844,
                                                    "end": 23846
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 23822,
                                                    "end": 23843
                                                },
                                                "flags": 256,
                                                "start": 23822,
                                                "end": 23846
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 23867,
                                                    "end": 23870
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 23847,
                                                    "end": 23866
                                                },
                                                "flags": 256,
                                                "start": 23847,
                                                "end": 23870
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 23892,
                                                    "end": 23951
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 23871,
                                                    "end": 23891
                                                },
                                                "flags": 256,
                                                "start": 23871,
                                                "end": 23951
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 21,
                                                    "rawText": "21",
                                                    "flags": 768,
                                                    "start": 23973,
                                                    "end": 23976
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 23952,
                                                    "end": 23972
                                                },
                                                "flags": 256,
                                                "start": 23952,
                                                "end": 23976
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 22,
                                                    "rawText": "22",
                                                    "flags": 768,
                                                    "start": 23996,
                                                    "end": 23999
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 23977,
                                                    "end": 23995
                                                },
                                                "flags": 256,
                                                "start": 23977,
                                                "end": 23999
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 23799,
                                        "end": 23999
                                    },
                                    "flags": 256,
                                    "start": 23789,
                                    "end": 24009
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
                                                    "start": 24040,
                                                    "end": 24042
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24020,
                                                    "end": 24039
                                                },
                                                "flags": 256,
                                                "start": 24020,
                                                "end": 24042
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24065,
                                                    "end": 24067
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24043,
                                                    "end": 24064
                                                },
                                                "flags": 256,
                                                "start": 24043,
                                                "end": 24067
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 24088,
                                                    "end": 24090
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24068,
                                                    "end": 24087
                                                },
                                                "flags": 256,
                                                "start": 24068,
                                                "end": 24090
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 24112,
                                                    "end": 24132
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24091,
                                                    "end": 24111
                                                },
                                                "flags": 256,
                                                "start": 24091,
                                                "end": 24132
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 67,
                                                    "rawText": "67",
                                                    "flags": 768,
                                                    "start": 24154,
                                                    "end": 24157
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24133,
                                                    "end": 24153
                                                },
                                                "flags": 256,
                                                "start": 24133,
                                                "end": 24157
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 72,
                                                    "rawText": "72",
                                                    "flags": 768,
                                                    "start": 24177,
                                                    "end": 24180
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24158,
                                                    "end": 24176
                                                },
                                                "flags": 256,
                                                "start": 24158,
                                                "end": 24180
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24020,
                                        "end": 24180
                                    },
                                    "flags": 256,
                                    "start": 24010,
                                    "end": 24190
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
                                                    "start": 24221,
                                                    "end": 24223
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24201,
                                                    "end": 24220
                                                },
                                                "flags": 256,
                                                "start": 24201,
                                                "end": 24223
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24246,
                                                    "end": 24248
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24224,
                                                    "end": 24245
                                                },
                                                "flags": 256,
                                                "start": 24224,
                                                "end": 24248
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 24269,
                                                    "end": 24272
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24249,
                                                    "end": 24268
                                                },
                                                "flags": 256,
                                                "start": 24249,
                                                "end": 24272
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 24294,
                                                    "end": 24353
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
                                                "end": 24353
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 67,
                                                    "rawText": "67",
                                                    "flags": 768,
                                                    "start": 24375,
                                                    "end": 24378
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24354,
                                                    "end": 24374
                                                },
                                                "flags": 256,
                                                "start": 24354,
                                                "end": 24378
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 72,
                                                    "rawText": "72",
                                                    "flags": 768,
                                                    "start": 24398,
                                                    "end": 24401
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24379,
                                                    "end": 24397
                                                },
                                                "flags": 256,
                                                "start": 24379,
                                                "end": 24401
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24201,
                                        "end": 24401
                                    },
                                    "flags": 256,
                                    "start": 24191,
                                    "end": 24411
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
                                                    "start": 24442,
                                                    "end": 24444
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24422,
                                                    "end": 24441
                                                },
                                                "flags": 256,
                                                "start": 24422,
                                                "end": 24444
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24467,
                                                    "end": 24469
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24445,
                                                    "end": 24466
                                                },
                                                "flags": 256,
                                                "start": 24445,
                                                "end": 24469
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 24490,
                                                    "end": 24492
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24470,
                                                    "end": 24489
                                                },
                                                "flags": 256,
                                                "start": 24470,
                                                "end": 24492
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 24514,
                                                    "end": 24534
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24493,
                                                    "end": 24513
                                                },
                                                "flags": 256,
                                                "start": 24493,
                                                "end": 24534
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 72,
                                                    "rawText": "72",
                                                    "flags": 768,
                                                    "start": 24556,
                                                    "end": 24559
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24535,
                                                    "end": 24555
                                                },
                                                "flags": 256,
                                                "start": 24535,
                                                "end": 24559
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 73,
                                                    "rawText": "73",
                                                    "flags": 768,
                                                    "start": 24579,
                                                    "end": 24582
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24560,
                                                    "end": 24578
                                                },
                                                "flags": 256,
                                                "start": 24560,
                                                "end": 24582
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24422,
                                        "end": 24582
                                    },
                                    "flags": 256,
                                    "start": 24412,
                                    "end": 24592
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
                                                    "start": 24623,
                                                    "end": 24625
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24603,
                                                    "end": 24622
                                                },
                                                "flags": 256,
                                                "start": 24603,
                                                "end": 24625
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24648,
                                                    "end": 24650
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24626,
                                                    "end": 24647
                                                },
                                                "flags": 256,
                                                "start": 24626,
                                                "end": 24650
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 24671,
                                                    "end": 24674
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24651,
                                                    "end": 24670
                                                },
                                                "flags": 256,
                                                "start": 24651,
                                                "end": 24674
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 24696,
                                                    "end": 24755
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24675,
                                                    "end": 24695
                                                },
                                                "flags": 256,
                                                "start": 24675,
                                                "end": 24755
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 72,
                                                    "rawText": "72",
                                                    "flags": 768,
                                                    "start": 24777,
                                                    "end": 24780
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24756,
                                                    "end": 24776
                                                },
                                                "flags": 256,
                                                "start": 24756,
                                                "end": 24780
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 73,
                                                    "rawText": "73",
                                                    "flags": 768,
                                                    "start": 24800,
                                                    "end": 24803
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24781,
                                                    "end": 24799
                                                },
                                                "flags": 256,
                                                "start": 24781,
                                                "end": 24803
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24603,
                                        "end": 24803
                                    },
                                    "flags": 256,
                                    "start": 24593,
                                    "end": 24813
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
                                                    "start": 24844,
                                                    "end": 24846
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 24824,
                                                    "end": 24843
                                                },
                                                "flags": 256,
                                                "start": 24824,
                                                "end": 24846
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 24869,
                                                    "end": 24871
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 24847,
                                                    "end": 24868
                                                },
                                                "flags": 256,
                                                "start": 24847,
                                                "end": 24871
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 24892,
                                                    "end": 24894
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 24872,
                                                    "end": 24891
                                                },
                                                "flags": 256,
                                                "start": 24872,
                                                "end": 24894
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 24916,
                                                    "end": 24936
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 24895,
                                                    "end": 24915
                                                },
                                                "flags": 256,
                                                "start": 24895,
                                                "end": 24936
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 80,
                                                    "rawText": "80",
                                                    "flags": 768,
                                                    "start": 24958,
                                                    "end": 24961
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 24937,
                                                    "end": 24957
                                                },
                                                "flags": 256,
                                                "start": 24937,
                                                "end": 24961
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 87,
                                                    "rawText": "87",
                                                    "flags": 768,
                                                    "start": 24981,
                                                    "end": 24984
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 24962,
                                                    "end": 24980
                                                },
                                                "flags": 256,
                                                "start": 24962,
                                                "end": 24984
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 24824,
                                        "end": 24984
                                    },
                                    "flags": 256,
                                    "start": 24814,
                                    "end": 24994
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
                                                    "start": 25025,
                                                    "end": 25027
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25005,
                                                    "end": 25024
                                                },
                                                "flags": 256,
                                                "start": 25005,
                                                "end": 25027
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25050,
                                                    "end": 25052
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25028,
                                                    "end": 25049
                                                },
                                                "flags": 256,
                                                "start": 25028,
                                                "end": 25052
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 25073,
                                                    "end": 25076
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25053,
                                                    "end": 25072
                                                },
                                                "flags": 256,
                                                "start": 25053,
                                                "end": 25076
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 25098,
                                                    "end": 25157
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25077,
                                                    "end": 25097
                                                },
                                                "flags": 256,
                                                "start": 25077,
                                                "end": 25157
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 80,
                                                    "rawText": "80",
                                                    "flags": 768,
                                                    "start": 25179,
                                                    "end": 25182
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25158,
                                                    "end": 25178
                                                },
                                                "flags": 256,
                                                "start": 25158,
                                                "end": 25182
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 87,
                                                    "rawText": "87",
                                                    "flags": 768,
                                                    "start": 25202,
                                                    "end": 25205
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25183,
                                                    "end": 25201
                                                },
                                                "flags": 256,
                                                "start": 25183,
                                                "end": 25205
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25005,
                                        "end": 25205
                                    },
                                    "flags": 256,
                                    "start": 24995,
                                    "end": 25215
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
                                                    "start": 25246,
                                                    "end": 25248
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25226,
                                                    "end": 25245
                                                },
                                                "flags": 256,
                                                "start": 25226,
                                                "end": 25248
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25271,
                                                    "end": 25273
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25249,
                                                    "end": 25270
                                                },
                                                "flags": 256,
                                                "start": 25249,
                                                "end": 25273
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 25294,
                                                    "end": 25296
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25274,
                                                    "end": 25293
                                                },
                                                "flags": 256,
                                                "start": 25274,
                                                "end": 25296
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 25318,
                                                    "end": 25338
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25297,
                                                    "end": 25317
                                                },
                                                "flags": 256,
                                                "start": 25297,
                                                "end": 25338
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 87,
                                                    "rawText": "87",
                                                    "flags": 768,
                                                    "start": 25360,
                                                    "end": 25363
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25339,
                                                    "end": 25359
                                                },
                                                "flags": 256,
                                                "start": 25339,
                                                "end": 25363
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 88,
                                                    "rawText": "88",
                                                    "flags": 768,
                                                    "start": 25383,
                                                    "end": 25386
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25364,
                                                    "end": 25382
                                                },
                                                "flags": 256,
                                                "start": 25364,
                                                "end": 25386
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25226,
                                        "end": 25386
                                    },
                                    "flags": 256,
                                    "start": 25216,
                                    "end": 25396
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
                                                    "start": 25427,
                                                    "end": 25429
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25407,
                                                    "end": 25426
                                                },
                                                "flags": 256,
                                                "start": 25407,
                                                "end": 25429
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25452,
                                                    "end": 25454
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25430,
                                                    "end": 25451
                                                },
                                                "flags": 256,
                                                "start": 25430,
                                                "end": 25454
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 25475,
                                                    "end": 25478
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25455,
                                                    "end": 25474
                                                },
                                                "flags": 256,
                                                "start": 25455,
                                                "end": 25478
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 25500,
                                                    "end": 25559
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25479,
                                                    "end": 25499
                                                },
                                                "flags": 256,
                                                "start": 25479,
                                                "end": 25559
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 87,
                                                    "rawText": "87",
                                                    "flags": 768,
                                                    "start": 25581,
                                                    "end": 25584
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25560,
                                                    "end": 25580
                                                },
                                                "flags": 256,
                                                "start": 25560,
                                                "end": 25584
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 88,
                                                    "rawText": "88",
                                                    "flags": 768,
                                                    "start": 25604,
                                                    "end": 25607
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25585,
                                                    "end": 25603
                                                },
                                                "flags": 256,
                                                "start": 25585,
                                                "end": 25607
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25407,
                                        "end": 25607
                                    },
                                    "flags": 256,
                                    "start": 25397,
                                    "end": 25617
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
                                                    "start": 25648,
                                                    "end": 25650
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25628,
                                                    "end": 25647
                                                },
                                                "flags": 256,
                                                "start": 25628,
                                                "end": 25650
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25673,
                                                    "end": 25675
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25651,
                                                    "end": 25672
                                                },
                                                "flags": 256,
                                                "start": 25651,
                                                "end": 25675
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 25696,
                                                    "end": 25698
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25676,
                                                    "end": 25695
                                                },
                                                "flags": 256,
                                                "start": 25676,
                                                "end": 25698
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 25720,
                                                    "end": 25740
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25699,
                                                    "end": 25719
                                                },
                                                "flags": 256,
                                                "start": 25699,
                                                "end": 25740
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 88,
                                                    "rawText": "88",
                                                    "flags": 768,
                                                    "start": 25762,
                                                    "end": 25765
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25741,
                                                    "end": 25761
                                                },
                                                "flags": 256,
                                                "start": 25741,
                                                "end": 25765
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 89,
                                                    "rawText": "89",
                                                    "flags": 768,
                                                    "start": 25785,
                                                    "end": 25788
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25766,
                                                    "end": 25784
                                                },
                                                "flags": 256,
                                                "start": 25766,
                                                "end": 25788
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25628,
                                        "end": 25788
                                    },
                                    "flags": 256,
                                    "start": 25618,
                                    "end": 25798
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
                                                    "start": 25829,
                                                    "end": 25831
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 25809,
                                                    "end": 25828
                                                },
                                                "flags": 256,
                                                "start": 25809,
                                                "end": 25831
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 25854,
                                                    "end": 25856
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 25832,
                                                    "end": 25853
                                                },
                                                "flags": 256,
                                                "start": 25832,
                                                "end": 25856
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 25877,
                                                    "end": 25880
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 25857,
                                                    "end": 25876
                                                },
                                                "flags": 256,
                                                "start": 25857,
                                                "end": 25880
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 25902,
                                                    "end": 25961
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 25881,
                                                    "end": 25901
                                                },
                                                "flags": 256,
                                                "start": 25881,
                                                "end": 25961
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 88,
                                                    "rawText": "88",
                                                    "flags": 768,
                                                    "start": 25983,
                                                    "end": 25986
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 25962,
                                                    "end": 25982
                                                },
                                                "flags": 256,
                                                "start": 25962,
                                                "end": 25986
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 89,
                                                    "rawText": "89",
                                                    "flags": 768,
                                                    "start": 26006,
                                                    "end": 26009
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 25987,
                                                    "end": 26005
                                                },
                                                "flags": 256,
                                                "start": 25987,
                                                "end": 26009
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 25809,
                                        "end": 26009
                                    },
                                    "flags": 256,
                                    "start": 25799,
                                    "end": 26019
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
                                                    "start": 26050,
                                                    "end": 26052
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26030,
                                                    "end": 26049
                                                },
                                                "flags": 256,
                                                "start": 26030,
                                                "end": 26052
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26075,
                                                    "end": 26077
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26053,
                                                    "end": 26074
                                                },
                                                "flags": 256,
                                                "start": 26053,
                                                "end": 26077
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 26098,
                                                    "end": 26100
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26078,
                                                    "end": 26097
                                                },
                                                "flags": 256,
                                                "start": 26078,
                                                "end": 26100
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 26122,
                                                    "end": 26142
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26101,
                                                    "end": 26121
                                                },
                                                "flags": 256,
                                                "start": 26101,
                                                "end": 26142
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 96,
                                                    "rawText": "96",
                                                    "flags": 768,
                                                    "start": 26164,
                                                    "end": 26167
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26143,
                                                    "end": 26163
                                                },
                                                "flags": 256,
                                                "start": 26143,
                                                "end": 26167
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 100,
                                                    "rawText": "100",
                                                    "flags": 768,
                                                    "start": 26187,
                                                    "end": 26191
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26168,
                                                    "end": 26186
                                                },
                                                "flags": 256,
                                                "start": 26168,
                                                "end": 26191
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26030,
                                        "end": 26191
                                    },
                                    "flags": 256,
                                    "start": 26020,
                                    "end": 26201
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
                                                    "start": 26232,
                                                    "end": 26234
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26212,
                                                    "end": 26231
                                                },
                                                "flags": 256,
                                                "start": 26212,
                                                "end": 26234
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26257,
                                                    "end": 26259
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26235,
                                                    "end": 26256
                                                },
                                                "flags": 256,
                                                "start": 26235,
                                                "end": 26259
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 26280,
                                                    "end": 26282
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26260,
                                                    "end": 26279
                                                },
                                                "flags": 256,
                                                "start": 26260,
                                                "end": 26282
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 26304,
                                                    "end": 26324
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26283,
                                                    "end": 26303
                                                },
                                                "flags": 256,
                                                "start": 26283,
                                                "end": 26324
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2856,
                                                    "rawText": "2856",
                                                    "flags": 768,
                                                    "start": 26346,
                                                    "end": 26351
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26325,
                                                    "end": 26345
                                                },
                                                "flags": 256,
                                                "start": 26325,
                                                "end": 26351
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2861,
                                                    "rawText": "2861",
                                                    "flags": 768,
                                                    "start": 26371,
                                                    "end": 26376
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26352,
                                                    "end": 26370
                                                },
                                                "flags": 256,
                                                "start": 26352,
                                                "end": 26376
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26212,
                                        "end": 26376
                                    },
                                    "flags": 256,
                                    "start": 26202,
                                    "end": 26386
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
                                                    "start": 26417,
                                                    "end": 26419
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26397,
                                                    "end": 26416
                                                },
                                                "flags": 256,
                                                "start": 26397,
                                                "end": 26419
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26442,
                                                    "end": 26444
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26420,
                                                    "end": 26441
                                                },
                                                "flags": 256,
                                                "start": 26420,
                                                "end": 26444
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 26465,
                                                    "end": 26468
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26445,
                                                    "end": 26464
                                                },
                                                "flags": 256,
                                                "start": 26445,
                                                "end": 26468
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 26490,
                                                    "end": 26549
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26469,
                                                    "end": 26489
                                                },
                                                "flags": 256,
                                                "start": 26469,
                                                "end": 26549
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2856,
                                                    "rawText": "2856",
                                                    "flags": 768,
                                                    "start": 26571,
                                                    "end": 26576
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26550,
                                                    "end": 26570
                                                },
                                                "flags": 256,
                                                "start": 26550,
                                                "end": 26576
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2861,
                                                    "rawText": "2861",
                                                    "flags": 768,
                                                    "start": 26596,
                                                    "end": 26601
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26577,
                                                    "end": 26595
                                                },
                                                "flags": 256,
                                                "start": 26577,
                                                "end": 26601
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26397,
                                        "end": 26601
                                    },
                                    "flags": 256,
                                    "start": 26387,
                                    "end": 26611
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
                                                    "start": 26642,
                                                    "end": 26644
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26622,
                                                    "end": 26641
                                                },
                                                "flags": 256,
                                                "start": 26622,
                                                "end": 26644
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26667,
                                                    "end": 26669
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26645,
                                                    "end": 26666
                                                },
                                                "flags": 256,
                                                "start": 26645,
                                                "end": 26669
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 26690,
                                                    "end": 26692
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26670,
                                                    "end": 26689
                                                },
                                                "flags": 256,
                                                "start": 26670,
                                                "end": 26692
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 26714,
                                                    "end": 26734
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26693,
                                                    "end": 26713
                                                },
                                                "flags": 256,
                                                "start": 26693,
                                                "end": 26734
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2861,
                                                    "rawText": "2861",
                                                    "flags": 768,
                                                    "start": 26756,
                                                    "end": 26761
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26735,
                                                    "end": 26755
                                                },
                                                "flags": 256,
                                                "start": 26735,
                                                "end": 26761
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2862,
                                                    "rawText": "2862",
                                                    "flags": 768,
                                                    "start": 26781,
                                                    "end": 26786
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26762,
                                                    "end": 26780
                                                },
                                                "flags": 256,
                                                "start": 26762,
                                                "end": 26786
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26622,
                                        "end": 26786
                                    },
                                    "flags": 256,
                                    "start": 26612,
                                    "end": 26796
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
                                                    "start": 26827,
                                                    "end": 26829
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 26807,
                                                    "end": 26826
                                                },
                                                "flags": 256,
                                                "start": 26807,
                                                "end": 26829
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 26852,
                                                    "end": 26854
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 26830,
                                                    "end": 26851
                                                },
                                                "flags": 256,
                                                "start": 26830,
                                                "end": 26854
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 26875,
                                                    "end": 26878
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 26855,
                                                    "end": 26874
                                                },
                                                "flags": 256,
                                                "start": 26855,
                                                "end": 26878
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 26900,
                                                    "end": 26959
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 26879,
                                                    "end": 26899
                                                },
                                                "flags": 256,
                                                "start": 26879,
                                                "end": 26959
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2861,
                                                    "rawText": "2861",
                                                    "flags": 768,
                                                    "start": 26981,
                                                    "end": 26986
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 26960,
                                                    "end": 26980
                                                },
                                                "flags": 256,
                                                "start": 26960,
                                                "end": 26986
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2862,
                                                    "rawText": "2862",
                                                    "flags": 768,
                                                    "start": 27006,
                                                    "end": 27011
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 26987,
                                                    "end": 27005
                                                },
                                                "flags": 256,
                                                "start": 26987,
                                                "end": 27011
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 26807,
                                        "end": 27011
                                    },
                                    "flags": 256,
                                    "start": 26797,
                                    "end": 27021
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
                                                    "start": 27052,
                                                    "end": 27054
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27032,
                                                    "end": 27051
                                                },
                                                "flags": 256,
                                                "start": 27032,
                                                "end": 27054
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27077,
                                                    "end": 27079
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27055,
                                                    "end": 27076
                                                },
                                                "flags": 256,
                                                "start": 27055,
                                                "end": 27079
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 27100,
                                                    "end": 27102
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27080,
                                                    "end": 27099
                                                },
                                                "flags": 256,
                                                "start": 27080,
                                                "end": 27102
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 27124,
                                                    "end": 27144
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27103,
                                                    "end": 27123
                                                },
                                                "flags": 256,
                                                "start": 27103,
                                                "end": 27144
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2862,
                                                    "rawText": "2862",
                                                    "flags": 768,
                                                    "start": 27166,
                                                    "end": 27171
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27145,
                                                    "end": 27165
                                                },
                                                "flags": 256,
                                                "start": 27145,
                                                "end": 27171
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2863,
                                                    "rawText": "2863",
                                                    "flags": 768,
                                                    "start": 27191,
                                                    "end": 27196
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27172,
                                                    "end": 27190
                                                },
                                                "flags": 256,
                                                "start": 27172,
                                                "end": 27196
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27032,
                                        "end": 27196
                                    },
                                    "flags": 256,
                                    "start": 27022,
                                    "end": 27206
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
                                                    "start": 27237,
                                                    "end": 27239
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27217,
                                                    "end": 27236
                                                },
                                                "flags": 256,
                                                "start": 27217,
                                                "end": 27239
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27262,
                                                    "end": 27264
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27240,
                                                    "end": 27261
                                                },
                                                "flags": 256,
                                                "start": 27240,
                                                "end": 27264
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 27285,
                                                    "end": 27288
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27265,
                                                    "end": 27284
                                                },
                                                "flags": 256,
                                                "start": 27265,
                                                "end": 27288
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 27310,
                                                    "end": 27369
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27289,
                                                    "end": 27309
                                                },
                                                "flags": 256,
                                                "start": 27289,
                                                "end": 27369
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2862,
                                                    "rawText": "2862",
                                                    "flags": 768,
                                                    "start": 27391,
                                                    "end": 27396
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27370,
                                                    "end": 27390
                                                },
                                                "flags": 256,
                                                "start": 27370,
                                                "end": 27396
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2863,
                                                    "rawText": "2863",
                                                    "flags": 768,
                                                    "start": 27416,
                                                    "end": 27421
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27397,
                                                    "end": 27415
                                                },
                                                "flags": 256,
                                                "start": 27397,
                                                "end": 27421
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27217,
                                        "end": 27421
                                    },
                                    "flags": 256,
                                    "start": 27207,
                                    "end": 27431
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
                                                    "start": 27462,
                                                    "end": 27464
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27442,
                                                    "end": 27461
                                                },
                                                "flags": 256,
                                                "start": 27442,
                                                "end": 27464
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27487,
                                                    "end": 27489
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27465,
                                                    "end": 27486
                                                },
                                                "flags": 256,
                                                "start": 27465,
                                                "end": 27489
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 27510,
                                                    "end": 27512
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27490,
                                                    "end": 27509
                                                },
                                                "flags": 256,
                                                "start": 27490,
                                                "end": 27512
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 27534,
                                                    "end": 27554
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27513,
                                                    "end": 27533
                                                },
                                                "flags": 256,
                                                "start": 27513,
                                                "end": 27554
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2922,
                                                    "rawText": "2922",
                                                    "flags": 768,
                                                    "start": 27576,
                                                    "end": 27581
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27555,
                                                    "end": 27575
                                                },
                                                "flags": 256,
                                                "start": 27555,
                                                "end": 27581
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2927,
                                                    "rawText": "2927",
                                                    "flags": 768,
                                                    "start": 27601,
                                                    "end": 27606
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27582,
                                                    "end": 27600
                                                },
                                                "flags": 256,
                                                "start": 27582,
                                                "end": 27606
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27442,
                                        "end": 27606
                                    },
                                    "flags": 256,
                                    "start": 27432,
                                    "end": 27616
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
                                                    "start": 27647,
                                                    "end": 27649
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27627,
                                                    "end": 27646
                                                },
                                                "flags": 256,
                                                "start": 27627,
                                                "end": 27649
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27672,
                                                    "end": 27674
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27650,
                                                    "end": 27671
                                                },
                                                "flags": 256,
                                                "start": 27650,
                                                "end": 27674
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 27695,
                                                    "end": 27698
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27675,
                                                    "end": 27694
                                                },
                                                "flags": 256,
                                                "start": 27675,
                                                "end": 27698
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 27720,
                                                    "end": 27779
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27699,
                                                    "end": 27719
                                                },
                                                "flags": 256,
                                                "start": 27699,
                                                "end": 27779
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2922,
                                                    "rawText": "2922",
                                                    "flags": 768,
                                                    "start": 27801,
                                                    "end": 27806
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27780,
                                                    "end": 27800
                                                },
                                                "flags": 256,
                                                "start": 27780,
                                                "end": 27806
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2927,
                                                    "rawText": "2927",
                                                    "flags": 768,
                                                    "start": 27826,
                                                    "end": 27831
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27807,
                                                    "end": 27825
                                                },
                                                "flags": 256,
                                                "start": 27807,
                                                "end": 27831
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27627,
                                        "end": 27831
                                    },
                                    "flags": 256,
                                    "start": 27617,
                                    "end": 27841
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
                                                    "start": 27872,
                                                    "end": 27874
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 27852,
                                                    "end": 27871
                                                },
                                                "flags": 256,
                                                "start": 27852,
                                                "end": 27874
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 27897,
                                                    "end": 27899
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 27875,
                                                    "end": 27896
                                                },
                                                "flags": 256,
                                                "start": 27875,
                                                "end": 27899
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 27920,
                                                    "end": 27922
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 27900,
                                                    "end": 27919
                                                },
                                                "flags": 256,
                                                "start": 27900,
                                                "end": 27922
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 27944,
                                                    "end": 27964
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 27923,
                                                    "end": 27943
                                                },
                                                "flags": 256,
                                                "start": 27923,
                                                "end": 27964
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2927,
                                                    "rawText": "2927",
                                                    "flags": 768,
                                                    "start": 27986,
                                                    "end": 27991
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 27965,
                                                    "end": 27985
                                                },
                                                "flags": 256,
                                                "start": 27965,
                                                "end": 27991
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2928,
                                                    "rawText": "2928",
                                                    "flags": 768,
                                                    "start": 28011,
                                                    "end": 28016
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 27992,
                                                    "end": 28010
                                                },
                                                "flags": 256,
                                                "start": 27992,
                                                "end": 28016
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 27852,
                                        "end": 28016
                                    },
                                    "flags": 256,
                                    "start": 27842,
                                    "end": 28026
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
                                                    "start": 28057,
                                                    "end": 28059
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 28037,
                                                    "end": 28056
                                                },
                                                "flags": 256,
                                                "start": 28037,
                                                "end": 28059
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 28082,
                                                    "end": 28084
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 28060,
                                                    "end": 28081
                                                },
                                                "flags": 256,
                                                "start": 28060,
                                                "end": 28084
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 28105,
                                                    "end": 28108
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 28085,
                                                    "end": 28104
                                                },
                                                "flags": 256,
                                                "start": 28085,
                                                "end": 28108
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 28130,
                                                    "end": 28189
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 28109,
                                                    "end": 28129
                                                },
                                                "flags": 256,
                                                "start": 28109,
                                                "end": 28189
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2927,
                                                    "rawText": "2927",
                                                    "flags": 768,
                                                    "start": 28211,
                                                    "end": 28216
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 28190,
                                                    "end": 28210
                                                },
                                                "flags": 256,
                                                "start": 28190,
                                                "end": 28216
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2928,
                                                    "rawText": "2928",
                                                    "flags": 768,
                                                    "start": 28236,
                                                    "end": 28241
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 28217,
                                                    "end": 28235
                                                },
                                                "flags": 256,
                                                "start": 28217,
                                                "end": 28241
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 28037,
                                        "end": 28241
                                    },
                                    "flags": 256,
                                    "start": 28027,
                                    "end": 28251
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
                                                    "start": 28282,
                                                    "end": 28284
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 28262,
                                                    "end": 28281
                                                },
                                                "flags": 256,
                                                "start": 28262,
                                                "end": 28284
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 28307,
                                                    "end": 28309
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 28285,
                                                    "end": 28306
                                                },
                                                "flags": 256,
                                                "start": 28285,
                                                "end": 28309
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 1,
                                                    "rawText": "1",
                                                    "flags": 768,
                                                    "start": 28330,
                                                    "end": 28332
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 28310,
                                                    "end": 28329
                                                },
                                                "flags": 256,
                                                "start": 28310,
                                                "end": 28332
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Unexpected token.",
                                                    "rawText": "Unexpected token.",
                                                    "flags": 768,
                                                    "start": 28354,
                                                    "end": 28374
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 28333,
                                                    "end": 28353
                                                },
                                                "flags": 256,
                                                "start": 28333,
                                                "end": 28374
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2928,
                                                    "rawText": "2928",
                                                    "flags": 768,
                                                    "start": 28396,
                                                    "end": 28401
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 28375,
                                                    "end": 28395
                                                },
                                                "flags": 256,
                                                "start": 28375,
                                                "end": 28401
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2929,
                                                    "rawText": "2929",
                                                    "flags": 768,
                                                    "start": 28421,
                                                    "end": 28426
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 28402,
                                                    "end": 28420
                                                },
                                                "flags": 256,
                                                "start": 28402,
                                                "end": 28426
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 28262,
                                        "end": 28426
                                    },
                                    "flags": 256,
                                    "start": 28252,
                                    "end": 28436
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
                                                    "start": 28467,
                                                    "end": 28469
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "kind",
                                                    "rawText": "kind",
                                                    "flags": 769,
                                                    "start": 28447,
                                                    "end": 28466
                                                },
                                                "flags": 256,
                                                "start": 28447,
                                                "end": 28469
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2,
                                                    "rawText": "2",
                                                    "flags": 768,
                                                    "start": 28492,
                                                    "end": 28494
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "source",
                                                    "rawText": "source",
                                                    "flags": 769,
                                                    "start": 28470,
                                                    "end": 28491
                                                },
                                                "flags": 256,
                                                "start": 28470,
                                                "end": 28494
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 69,
                                                    "rawText": "69",
                                                    "flags": 768,
                                                    "start": 28515,
                                                    "end": 28518
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "code",
                                                    "rawText": "code",
                                                    "flags": 769,
                                                    "start": 28495,
                                                    "end": 28514
                                                },
                                                "flags": 256,
                                                "start": 28495,
                                                "end": 28518
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "Private identifiers are not allowed outside class_bodies",
                                                    "rawText": "Private identifiers are not allowed outside class_bodies",
                                                    "flags": 768,
                                                    "start": 28540,
                                                    "end": 28599
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "error",
                                                    "rawText": "error",
                                                    "flags": 769,
                                                    "start": 28519,
                                                    "end": 28539
                                                },
                                                "flags": 256,
                                                "start": 28519,
                                                "end": 28599
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2928,
                                                    "rawText": "2928",
                                                    "flags": 768,
                                                    "start": 28621,
                                                    "end": 28626
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "start",
                                                    "rawText": "start",
                                                    "flags": 769,
                                                    "start": 28600,
                                                    "end": 28620
                                                },
                                                "flags": 256,
                                                "start": 28600,
                                                "end": 28626
                                            },
                                            {
                                                "kind": 219,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": 2929,
                                                    "rawText": "2929",
                                                    "flags": 768,
                                                    "start": 28646,
                                                    "end": 28651
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "end",
                                                    "rawText": "end",
                                                    "flags": 769,
                                                    "start": 28627,
                                                    "end": 28645
                                                },
                                                "flags": 256,
                                                "start": 28627,
                                                "end": 28651
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": true,
                                        "flags": 1,
                                        "start": 28447,
                                        "end": 28651
                                    },
                                    "flags": 256,
                                    "start": 28437,
                                    "end": 28661
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 22663,
                            "end": 28661
                        },
                        "flags": 256,
                        "start": 22661,
                        "end": 28667
                    },
                    {
                        "kind": 201392131,
                        "text": "start",
                        "rawText": "start",
                        "flags": 769,
                        "start": 28668,
                        "end": 28680
                    }
                ],
                "flags": 256,
                "start": 22661,
                "end": 28680
            },
            "flags": 128,
            "start": 22661,
            "end": 28680
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
                        "start": 28681,
                        "end": 28683
                    },
                    {
                        "kind": 201392131,
                        "text": "end",
                        "rawText": "end",
                        "flags": 769,
                        "start": 28684,
                        "end": 28694
                    }
                ],
                "flags": 256,
                "start": 28681,
                "end": 28694
            },
            "flags": 128,
            "start": 28681,
            "end": 28694
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 2970,
                "rawText": "2970",
                "flags": 768,
                "start": 28695,
                "end": 28700
            },
            "flags": 128,
            "start": 28695,
            "end": 28700
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
                        "start": 28702,
                        "end": 28705
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Printed\n\n",
                        "rawText": "\n\n### Printed\n\n",
                        "flags": 768,
                        "start": 28705,
                        "end": 28722
                    },
                    "flags": 256,
                    "start": 28702,
                    "end": 28722
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 28722,
                    "end": 28724
                },
                "flags": 256,
                "start": 28702,
                "end": 28724
            },
            "flags": 128,
            "start": 28702,
            "end": 28724
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 28724,
                "end": 28734
            },
            "flags": 128,
            "start": 28724,
            "end": 28734
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 28734,
                "end": 28740
            },
            "flags": 128,
            "start": 28734,
            "end": 28740
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
                                    "start": 28751,
                                    "end": 28757
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 28757,
                                    "end": 28763
                                },
                                "flags": 256,
                                "start": 28751,
                                "end": 28763
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 28763,
                                "end": 28765
                            },
                            "flags": 256,
                            "start": 28751,
                            "end": 28765
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rconst a: number = 1\r",
                            "rawText": "js\r\nconst a: number = 1\r\n",
                            "flags": 768,
                            "start": 28765,
                            "end": 28792
                        },
                        "flags": 256,
                        "start": 28751,
                        "end": 28792
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 28792,
                        "end": 28794
                    },
                    "flags": 256,
                    "start": 28751,
                    "end": 28794
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 28794,
                    "end": 28796
                },
                "flags": 256,
                "start": 28751,
                "end": 28796
            },
            "flags": 128,
            "start": 28751,
            "end": 28796
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 28802,
                "end": 28809
            },
            "flags": 128,
            "start": 28802,
            "end": 28809
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 28818,
                "end": 28825
            },
            "flags": 128,
            "start": 28818,
            "end": 28825
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
                            "start": 28825,
                            "end": 28829
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 28829,
                            "end": 28837
                        },
                        "flags": 256,
                        "start": 28825,
                        "end": 28837
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"const a: number = 1\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": true,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 5,\r                                \"end\": 7\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 4202657,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 8,\r                                \"end\": 15\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 17,\r                                \"end\": 19\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 5,\r                            \"end\": 19\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 5,\r                    \"end\": 19\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 19\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 19\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 19\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"const a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 5,\r\n                                \"end\": 7\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 8,\r\n                                \"end\": 15\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 17,\r\n                                \"end\": 19\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 5,\r\n                            \"end\": 19\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 5,\r\n                    \"end\": 19\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 19\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 19\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 19\r\n}\r\n",
                        "flags": 768,
                        "start": 28837,
                        "end": 31583
                    },
                    "flags": 256,
                    "start": 28825,
                    "end": 31583
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 31583,
                    "end": 31585
                },
                "flags": 256,
                "start": 28825,
                "end": 31585
            },
            "flags": 128,
            "start": 28825,
            "end": 31585
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
                            "start": 31592,
                            "end": 31600
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 31600,
                            "end": 31608
                        },
                        "flags": 256,
                        "start": 31592,
                        "end": 31608
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 31608,
                        "end": 31649
                    },
                    "flags": 256,
                    "start": 31592,
                    "end": 31649
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 31649,
                    "end": 31651
                },
                "flags": 256,
                "start": 31592,
                "end": 31651
            },
            "flags": 128,
            "start": 31592,
            "end": 31651
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
                                        "start": 31658,
                                        "end": 31670
                                    },
                                    "template": {
                                        "kind": 458761,
                                        "text": "",
                                        "rawText": "",
                                        "flags": 768,
                                        "start": 31670,
                                        "end": 31678
                                    },
                                    "flags": 256,
                                    "start": 31658,
                                    "end": 31678
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "javascript\r\r",
                                    "rawText": "javascript\r\n\r\n",
                                    "flags": 768,
                                    "start": 31678,
                                    "end": 31694
                                },
                                "flags": 256,
                                "start": 31658,
                                "end": 31694
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 31694,
                                "end": 31696
                            },
                            "flags": 256,
                            "start": 31658,
                            "end": 31696
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 31696,
                            "end": 31702
                        },
                        "flags": 256,
                        "start": 31658,
                        "end": 31702
                    },
                    "template": {
                        "kind": 458761,
                        "text": "\n\n### Diagnostics\n\n",
                        "rawText": "\n\n### Diagnostics\n\n",
                        "flags": 768,
                        "start": 31702,
                        "end": 31723
                    },
                    "flags": 256,
                    "start": 31658,
                    "end": 31723
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 31723,
                    "end": 31725
                },
                "flags": 256,
                "start": 31658,
                "end": 31725
            },
            "flags": 128,
            "start": 31658,
            "end": 31725
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "javascript",
                "rawText": "javascript",
                "flags": 768,
                "start": 31725,
                "end": 31735
            },
            "flags": 128,
            "start": 31725,
            "end": 31735
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 31735,
                "end": 31741
            },
            "flags": 128,
            "start": 31735,
            "end": 31741
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
                                    "start": 31752,
                                    "end": 31758
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 31758,
                                    "end": 31764
                                },
                                "flags": 256,
                                "start": 31752,
                                "end": 31764
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 31764,
                                "end": 31766
                            },
                            "flags": 256,
                            "start": 31752,
                            "end": 31766
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rconst a: number = 1\r",
                            "rawText": "js\r\nconst a: number = 1\r\n",
                            "flags": 768,
                            "start": 31766,
                            "end": 31793
                        },
                        "flags": 256,
                        "start": 31752,
                        "end": 31793
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 31793,
                        "end": 31795
                    },
                    "flags": 256,
                    "start": 31752,
                    "end": 31795
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 31795,
                    "end": 31797
                },
                "flags": 256,
                "start": 31752,
                "end": 31797
            },
            "flags": 128,
            "start": 31752,
            "end": 31797
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 31803,
                "end": 31810
            },
            "flags": 128,
            "start": 31803,
            "end": 31810
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 31819,
                "end": 31826
            },
            "flags": 128,
            "start": 31819,
            "end": 31826
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
                            "start": 31826,
                            "end": 31830
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 31830,
                            "end": 31838
                        },
                        "flags": 256,
                        "start": 31826,
                        "end": 31838
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"const a: number = 1\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 142,\r                \"isConst\": true,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 5,\r                                \"end\": 7\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 4202657,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 8,\r                                \"end\": 15\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 17,\r                                \"end\": 19\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 5,\r                            \"end\": 19\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 5,\r                    \"end\": 19\r                },\r                \"flags\": 16,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 0,\r                \"end\": 19\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 19\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 19\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"const a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 5,\r\n                                \"end\": 7\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 8,\r\n                                \"end\": 15\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 17,\r\n                                \"end\": 19\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 5,\r\n                            \"end\": 19\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 5,\r\n                    \"end\": 19\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 19\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 19\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 19\r\n}\r\n",
                        "flags": 768,
                        "start": 31838,
                        "end": 34584
                    },
                    "flags": 256,
                    "start": 31826,
                    "end": 34584
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 34584,
                    "end": 34586
                },
                "flags": 256,
                "start": 31826,
                "end": 34586
            },
            "flags": 128,
            "start": 31826,
            "end": 34586
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
                            "start": 34593,
                            "end": 34601
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 34601,
                            "end": 34609
                        },
                        "flags": 256,
                        "start": 34593,
                        "end": 34609
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 34609,
                        "end": 34650
                    },
                    "flags": 256,
                    "start": 34593,
                    "end": 34650
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 34650,
                    "end": 34652
                },
                "flags": 256,
                "start": 34593,
                "end": 34652
            },
            "flags": 128,
            "start": 34593,
            "end": 34652
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
                                    "start": 34659,
                                    "end": 34671
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 34671,
                                    "end": 34679
                                },
                                "flags": 256,
                                "start": 34659,
                                "end": 34679
                            },
                            "template": {
                                "kind": 458761,
                                "text": "javascript\r\r",
                                "rawText": "javascript\r\n\r\n",
                                "flags": 768,
                                "start": 34679,
                                "end": 34695
                            },
                            "flags": 256,
                            "start": 34659,
                            "end": 34695
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 34695,
                            "end": 34697
                        },
                        "flags": 256,
                        "start": 34659,
                        "end": 34697
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 34697,
                        "end": 34703
                    },
                    "flags": 256,
                    "start": 34659,
                    "end": 34703
                },
                "template": {
                    "kind": 458761,
                    "text": "\n",
                    "rawText": "",
                    "flags": 768,
                    "start": 34703,
                    "end": 34705
                },
                "flags": 256,
                "start": 34659,
                "end": 34705
            },
            "flags": 128,
            "start": 34659,
            "end": 34705
        }
    ],
    "isModule": false,
    "text": "parser test case\r\n\r\n## Input\r\n\r\n`````js\r\nconst a: number = 1\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"const a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 5,\r\n                                \"end\": 7\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 8,\r\n                                \"end\": 15\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 17,\r\n                                \"end\": 19\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 5,\r\n                            \"end\": 19\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 5,\r\n                    \"end\": 19\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 19\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 19\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 19\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n\n## Output\n\n### Hybrid CST\n\n```javascript\n{\n    \"kind\": 122,\n    \"directives\": [],\n    \"statements\": [\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"parser\",\n                \"rawText\": \"parser\",\n                \"flags\": 768,\n                \"start\": 0,\n                \"end\": 6\n            },\n            \"flags\": 128,\n            \"start\": 0,\n            \"end\": 6\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"test\",\n                \"rawText\": \"test\",\n                \"flags\": 768,\n                \"start\": 6,\n                \"end\": 11\n            },\n            \"flags\": 128,\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 226,\n                            \"member\": {\n                                \"kind\": 226,\n                                \"member\": {\n                                    \"kind\": 134299649,\n                                    \"text\": \"Input\",\n                                    \"rawText\": \"Input\",\n                                    \"flags\": 768,\n                                    \"start\": 22,\n                                    \"end\": 28\n                                },\n                                \"template\": {\n                                    \"kind\": 458761,\n                                    \"text\": \"\",\n                                    \"rawText\": \"\",\n                                    \"flags\": 768,\n                                    \"start\": 28,\n                                    \"end\": 34\n                                },\n                                \"flags\": 256,\n                                \"start\": 22,\n                                \"end\": 34\n                            },\n                            \"template\": {\n                                \"kind\": 458761,\n                                \"text\": \"\",\n                                \"rawText\": \"\",\n                                \"flags\": 768,\n                                \"start\": 34,\n                                \"end\": 36\n                            },\n                            \"flags\": 256,\n                            \"start\": 22,\n                            \"end\": 36\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"js\\rconst a: number = 1\\r\",\n                            \"rawText\": \"js\\r\\nconst a: number = 1\\r\\n\",\n                            \"flags\": 768,\n                            \"start\": 36,\n                            \"end\": 63\n                        },\n                        \"flags\": 256,\n                        \"start\": 22,\n                        \"end\": 63\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"\",\n                        \"rawText\": \"\",\n                        \"flags\": 768,\n                        \"start\": 63,\n                        \"end\": 65\n                    },\n                    \"flags\": 256,\n                    \"start\": 22,\n                    \"end\": 65\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 65,\n                    \"end\": 67\n                },\n                \"flags\": 256,\n                \"start\": 22,\n                \"end\": 67\n            },\n            \"flags\": 128,\n            \"start\": 22,\n            \"end\": 67\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Output\",\n                \"rawText\": \"Output\",\n                \"flags\": 768,\n                \"start\": 73,\n                \"end\": 80\n            },\n            \"flags\": 128,\n            \"start\": 73,\n            \"end\": 80\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 134299649,\n                \"text\": \"Hybrid\",\n                \"rawText\": \"Hybrid\",\n                \"flags\": 768,\n                \"start\": 89,\n                \"end\": 96\n            },\n            \"flags\": 128,\n            \"start\": 89,\n            \"end\": 96\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"CST\",\n                            \"rawText\": \"CST\",\n                            \"flags\": 768,\n                            \"start\": 96,\n                            \"end\": 100\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 100,\n                            \"end\": 108\n                        },\n                        \"flags\": 256,\n                        \"start\": 96,\n                        \"end\": 108\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r{\\r    \\\"kind\\\": 196,\\r    \\\"source\\\": \\\"const a: number = 1\\\",\\r    \\\"filename\\\": \\\"\\\",\\r    \\\"scriptBody\\\": {\\r        \\\"kind\\\": 197,\\r        \\\"statements\\\": [\\r            {\\r                \\\"kind\\\": 142,\\r                \\\"isConst\\\": true,\\r                \\\"binding\\\": {\\r                    \\\"kind\\\": 31,\\r                    \\\"bindingList\\\": [\\r                        {\\r                            \\\"kind\\\": 141,\\r                            \\\"binding\\\": {\\r                                \\\"kind\\\": 131102,\\r                                \\\"text\\\": \\\"a\\\",\\r                                \\\"rawText\\\": \\\"a\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 1025,\\r                                \\\"start\\\": 5,\\r                                \\\"end\\\": 7\\r                            },\\r                            \\\"exclamation\\\": false,\\r                            \\\"type\\\": {\\r                                \\\"kind\\\": 4202657,\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 2097152,\\r                                \\\"start\\\": 8,\\r                                \\\"end\\\": 15\\r                            },\\r                            \\\"initializer\\\": {\\r                                \\\"kind\\\": 4261540,\\r                                \\\"text\\\": 1,\\r                                \\\"rawText\\\": \\\"1\\\",\\r                                \\\"flags\\\": 0,\\r                                \\\"intersects\\\": false,\\r                                \\\"transformFlags\\\": 0,\\r                                \\\"start\\\": 17,\\r                                \\\"end\\\": 19\\r                            },\\r                            \\\"flags\\\": 0,\\r                            \\\"intersects\\\": false,\\r                            \\\"transformFlags\\\": 0,\\r                            \\\"start\\\": 5,\\r                            \\\"end\\\": 19\\r                        }\\r                    ],\\r                    \\\"flags\\\": 16,\\r                    \\\"intersects\\\": false,\\r                    \\\"transformFlags\\\": 0,\\r                    \\\"start\\\": 5,\\r                    \\\"end\\\": 19\\r                },\\r                \\\"flags\\\": 16,\\r                \\\"intersects\\\": false,\\r                \\\"transformFlags\\\": 769,\\r                \\\"start\\\": 0,\\r                \\\"end\\\": 19\\r            }\\r        ],\\r        \\\"transformFlags\\\": 0,\\r        \\\"flags\\\": 0,\\r        \\\"intersects\\\": false,\\r        \\\"start\\\": 0,\\r        \\\"end\\\": 19\\r    },\\r    \\\"jsx\\\": false,\\r    \\\"printable\\\": true,\\r    \\\"diagnostics\\\": [],\\r    \\\"incremental\\\": false,\\r    \\\"flags\\\": 0,\\r    \\\"intersects\\\": false,\\r    \\\"transformFlags\\\": 0,\\r    \\\"start\\\": 0,\\r    \\\"end\\\": 19\\r}\\r\",\n                        \"rawText\": \"javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"const a: number = 1\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 142,\\r\\n                \\\"isConst\\\": true,\\r\\n                \\\"binding\\\": {\\r\\n                    \\\"kind\\\": 31,\\r\\n                    \\\"bindingList\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 141,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"a\\\",\\r\\n                                \\\"rawText\\\": \\\"a\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 5,\\r\\n                                \\\"end\\\": 7\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": {\\r\\n                                \\\"kind\\\": 4202657,\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 2097152,\\r\\n                                \\\"start\\\": 8,\\r\\n                                \\\"end\\\": 15\\r\\n                            },\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 4261540,\\r\\n                                \\\"text\\\": 1,\\r\\n                                \\\"rawText\\\": \\\"1\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 17,\\r\\n                                \\\"end\\\": 19\\r\\n                            },\\r\\n                            \\\"flags\\\": 0,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 5,\\r\\n                            \\\"end\\\": 19\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 16,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 5,\\r\\n                    \\\"end\\\": 19\\r\\n                },\\r\\n                \\\"flags\\\": 16,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 769,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 19\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 19\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 19\\r\\n}\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 108,\n                        \"end\": 2854\n                    },\n                    \"flags\": 256,\n                    \"start\": 96,\n                    \"end\": 2854\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2854,\n                    \"end\": 2856\n                },\n                \"flags\": 256,\n                \"start\": 96,\n                \"end\": 2856\n            },\n            \"flags\": 128,\n            \"start\": 96,\n            \"end\": 2856\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Printed\",\n                            \"rawText\": \"Printed\",\n                            \"flags\": 768,\n                            \"start\": 2863,\n                            \"end\": 2871\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2871,\n                            \"end\": 2879\n                        },\n                        \"flags\": 256,\n                        \"start\": 2863,\n                        \"end\": 2879\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r@{x2716}@ Soon to be open sourced\\r\",\n                        \"rawText\": \"javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2879,\n                        \"end\": 2920\n                    },\n                    \"flags\": 256,\n                    \"start\": 2863,\n                    \"end\": 2920\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2920,\n                    \"end\": 2922\n                },\n                \"flags\": 256,\n                \"start\": 2863,\n                \"end\": 2922\n            },\n            \"flags\": 128,\n            \"start\": 2863,\n            \"end\": 2922\n        },\n        {\n            \"kind\": 120,\n            \"expression\": {\n                \"kind\": 226,\n                \"member\": {\n                    \"kind\": 226,\n                    \"member\": {\n                        \"kind\": 226,\n                        \"member\": {\n                            \"kind\": 134299649,\n                            \"text\": \"Diagnostics\",\n                            \"rawText\": \"Diagnostics\",\n                            \"flags\": 768,\n                            \"start\": 2929,\n                            \"end\": 2941\n                        },\n                        \"template\": {\n                            \"kind\": 458761,\n                            \"text\": \"\",\n                            \"rawText\": \"\",\n                            \"flags\": 768,\n                            \"start\": 2941,\n                            \"end\": 2949\n                        },\n                        \"flags\": 256,\n                        \"start\": 2929,\n                        \"end\": 2949\n                    },\n                    \"template\": {\n                        \"kind\": 458761,\n                        \"text\": \"javascript\\r\\r\",\n                        \"rawText\": \"javascript\\r\\n\\r\\n\",\n                        \"flags\": 768,\n                        \"start\": 2949,\n                        \"end\": 2965\n                    },\n                    \"flags\": 256,\n                    \"start\": 2929,\n                    \"end\": 2965\n                },\n                \"template\": {\n                    \"kind\": 458761,\n                    \"text\": \"\",\n                    \"rawText\": \"\",\n                    \"flags\": 768,\n                    \"start\": 2965,\n                    \"end\": 2967\n                },\n                \"flags\": 256,\n                \"start\": 2929,\n                \"end\": 2967\n            },\n            \"flags\": 128,\n            \"start\": 2929,\n            \"end\": 2967\n        }\n    ],\n    \"isModule\": false,\n    \"text\": \"parser test case\\r\\n\\r\\n## Input\\r\\n\\r\\n`````js\\r\\nconst a: number = 1\\r\\n`````\\r\\n\\r\\n## Output\\r\\n\\r\\n\\r\\n### Hybrid CST\\r\\n\\r\\n\\r\\n```javascript\\r\\n{\\r\\n    \\\"kind\\\": 196,\\r\\n    \\\"source\\\": \\\"const a: number = 1\\\",\\r\\n    \\\"filename\\\": \\\"\\\",\\r\\n    \\\"scriptBody\\\": {\\r\\n        \\\"kind\\\": 197,\\r\\n        \\\"statements\\\": [\\r\\n            {\\r\\n                \\\"kind\\\": 142,\\r\\n                \\\"isConst\\\": true,\\r\\n                \\\"binding\\\": {\\r\\n                    \\\"kind\\\": 31,\\r\\n                    \\\"bindingList\\\": [\\r\\n                        {\\r\\n                            \\\"kind\\\": 141,\\r\\n                            \\\"binding\\\": {\\r\\n                                \\\"kind\\\": 131102,\\r\\n                                \\\"text\\\": \\\"a\\\",\\r\\n                                \\\"rawText\\\": \\\"a\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 1025,\\r\\n                                \\\"start\\\": 5,\\r\\n                                \\\"end\\\": 7\\r\\n                            },\\r\\n                            \\\"exclamation\\\": false,\\r\\n                            \\\"type\\\": {\\r\\n                                \\\"kind\\\": 4202657,\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 2097152,\\r\\n                                \\\"start\\\": 8,\\r\\n                                \\\"end\\\": 15\\r\\n                            },\\r\\n                            \\\"initializer\\\": {\\r\\n                                \\\"kind\\\": 4261540,\\r\\n                                \\\"text\\\": 1,\\r\\n                                \\\"rawText\\\": \\\"1\\\",\\r\\n                                \\\"flags\\\": 0,\\r\\n                                \\\"intersects\\\": false,\\r\\n                                \\\"transformFlags\\\": 0,\\r\\n                                \\\"start\\\": 17,\\r\\n                                \\\"end\\\": 19\\r\\n                            },\\r\\n                            \\\"flags\\\": 0,\\r\\n                            \\\"intersects\\\": false,\\r\\n                            \\\"transformFlags\\\": 0,\\r\\n                            \\\"start\\\": 5,\\r\\n                            \\\"end\\\": 19\\r\\n                        }\\r\\n                    ],\\r\\n                    \\\"flags\\\": 16,\\r\\n                    \\\"intersects\\\": false,\\r\\n                    \\\"transformFlags\\\": 0,\\r\\n                    \\\"start\\\": 5,\\r\\n                    \\\"end\\\": 19\\r\\n                },\\r\\n                \\\"flags\\\": 16,\\r\\n                \\\"intersects\\\": false,\\r\\n                \\\"transformFlags\\\": 769,\\r\\n                \\\"start\\\": 0,\\r\\n                \\\"end\\\": 19\\r\\n            }\\r\\n        ],\\r\\n        \\\"transformFlags\\\": 0,\\r\\n        \\\"flags\\\": 0,\\r\\n        \\\"intersects\\\": false,\\r\\n        \\\"start\\\": 0,\\r\\n        \\\"end\\\": 19\\r\\n    },\\r\\n    \\\"jsx\\\": false,\\r\\n    \\\"printable\\\": true,\\r\\n    \\\"diagnostics\\\": [],\\r\\n    \\\"incremental\\\": false,\\r\\n    \\\"flags\\\": 0,\\r\\n    \\\"intersects\\\": false,\\r\\n    \\\"transformFlags\\\": 0,\\r\\n    \\\"start\\\": 0,\\r\\n    \\\"end\\\": 19\\r\\n}\\r\\n```\\r\\n\\r\\n### Printed\\r\\n\\r\\n\\r\\n```javascript\\r\\n@{x2716}@ Soon to be open sourced\\r\\n```\\r\\n\\r\\n### Diagnostics\\r\\n\\r\\n\\r\\n```javascript\\r\\n\\r\\n```\\r\\n\\r\",\n    \"fileName\": \"__root__\",\n    \"flags\": 0,\n    \"diagnostics\": [\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 6,\n            \"end\": 11\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 5,\n            \"error\": \"Statement expected\",\n            \"start\": 11,\n            \"end\": 16\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 16,\n            \"end\": 21\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 21,\n            \"end\": 22\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 67,\n            \"end\": 72\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 67,\n            \"end\": 72\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 72,\n            \"end\": 73\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 72,\n            \"end\": 73\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 80,\n            \"end\": 87\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 80,\n            \"end\": 87\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 87,\n            \"end\": 88\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 87,\n            \"end\": 88\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 88,\n            \"end\": 89\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 88,\n            \"end\": 89\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 96,\n            \"end\": 100\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2856,\n            \"end\": 2861\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2856,\n            \"end\": 2861\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2861,\n            \"end\": 2862\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2861,\n            \"end\": 2862\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2862,\n            \"end\": 2863\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2862,\n            \"end\": 2863\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2922,\n            \"end\": 2927\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2922,\n            \"end\": 2927\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2927,\n            \"end\": 2928\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2927,\n            \"end\": 2928\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 1,\n            \"error\": \"Unexpected token.\",\n            \"start\": 2928,\n            \"end\": 2929\n        },\n        {\n            \"kind\": 2,\n            \"source\": 2,\n            \"code\": 69,\n            \"error\": \"Private identifiers are not allowed outside class_bodies\",\n            \"start\": 2928,\n            \"end\": 2929\n        }\n    ],\n    \"start\": 0,\n    \"end\": 2970\n}\n```\n\n### Printed\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\nconst a: number = 1\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"const a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 5,\r\n                                \"end\": 7\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 8,\r\n                                \"end\": 15\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 17,\r\n                                \"end\": 19\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 5,\r\n                            \"end\": 19\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 5,\r\n                    \"end\": 19\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 19\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 19\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 19\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n\n### Diagnostics\n\n```javascript\n test case\r\n\r\n## Input\r\n\r\n`````js\r\nconst a: number = 1\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"const a: number = 1\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 5,\r\n                                \"end\": 7\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 4202657,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 8,\r\n                                \"end\": 15\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 17,\r\n                                \"end\": 19\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 5,\r\n                            \"end\": 19\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 5,\r\n                    \"end\": 19\r\n                },\r\n                \"flags\": 16,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 0,\r\n                \"end\": 19\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 19\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 19\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r\n```\n",
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
            "start": 67,
            "end": 72
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 67,
            "end": 72
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 72,
            "end": 73
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 72,
            "end": 73
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 80,
            "end": 87
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 80,
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
            "start": 88,
            "end": 89
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 88,
            "end": 89
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 96,
            "end": 100
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2856,
            "end": 2861
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2856,
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
            "start": 2862,
            "end": 2863
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2862,
            "end": 2863
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2922,
            "end": 2927
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2922,
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
            "start": 2928,
            "end": 2929
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2928,
            "end": 2929
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2967,
            "end": 2973
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2967,
            "end": 2973
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2973,
            "end": 2974
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2973,
            "end": 2974
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2981,
            "end": 2984
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2981,
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
            "start": 2985,
            "end": 2986
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 2985,
            "end": 2986
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 2993,
            "end": 2997
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19306,
            "end": 19308
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19306,
            "end": 19308
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19308,
            "end": 19308
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19308,
            "end": 19309
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19308,
            "end": 19309
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19309,
            "end": 19310
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19310,
            "end": 19310
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19310,
            "end": 19311
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19310,
            "end": 19311
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19317,
            "end": 19319
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19329,
            "end": 19331
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19331,
            "end": 19331
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19331,
            "end": 19332
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19331,
            "end": 19332
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19332,
            "end": 19333
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19333,
            "end": 19333
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19333,
            "end": 19334
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19333,
            "end": 19334
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19398,
            "end": 19408
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19398,
            "end": 19408
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19408,
            "end": 19408
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19408,
            "end": 19409
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19408,
            "end": 19409
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19409,
            "end": 19410
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19410,
            "end": 19410
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19410,
            "end": 19411
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19410,
            "end": 19411
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19412,
            "end": 19413
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19413,
            "end": 19413
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19413,
            "end": 19414
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19413,
            "end": 19414
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19414,
            "end": 19415
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19415,
            "end": 19415
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19415,
            "end": 19416
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19415,
            "end": 19416
        },
        {
            "kind": 2,
            "source": 2,
            "code": 89,
            "error": "Invalid hexadecimal escape sequence",
            "start": 19417,
            "end": 19421
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19417,
            "end": 19422
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19417,
            "end": 19422
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22613,
            "end": 22614
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 22613,
            "end": 22614
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22638,
            "end": 22639
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 22638,
            "end": 22639
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22660,
            "end": 22661
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 22660,
            "end": 22661
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28680,
            "end": 28681
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28680,
            "end": 28681
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28694,
            "end": 28695
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28694,
            "end": 28695
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28700,
            "end": 28702
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28724,
            "end": 28734
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28740,
            "end": 28745
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28740,
            "end": 28745
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28745,
            "end": 28750
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28745,
            "end": 28750
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28750,
            "end": 28751
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28750,
            "end": 28751
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28796,
            "end": 28801
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28796,
            "end": 28801
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28801,
            "end": 28802
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28801,
            "end": 28802
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28809,
            "end": 28816
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28809,
            "end": 28816
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28816,
            "end": 28817
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28816,
            "end": 28817
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28817,
            "end": 28818
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 28817,
            "end": 28818
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 28825,
            "end": 28829
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31585,
            "end": 31590
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31585,
            "end": 31590
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31590,
            "end": 31591
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31590,
            "end": 31591
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31591,
            "end": 31592
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31591,
            "end": 31592
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31651,
            "end": 31656
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31651,
            "end": 31656
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31656,
            "end": 31657
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31656,
            "end": 31657
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31657,
            "end": 31658
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31657,
            "end": 31658
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31725,
            "end": 31735
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31741,
            "end": 31746
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 31741,
            "end": 31746
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31746,
            "end": 31751
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31746,
            "end": 31751
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31751,
            "end": 31752
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31751,
            "end": 31752
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31797,
            "end": 31802
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31797,
            "end": 31802
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31802,
            "end": 31803
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31802,
            "end": 31803
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31810,
            "end": 31817
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31810,
            "end": 31817
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31817,
            "end": 31818
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31817,
            "end": 31818
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31818,
            "end": 31819
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 31818,
            "end": 31819
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 31826,
            "end": 31830
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34586,
            "end": 34591
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34586,
            "end": 34591
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34591,
            "end": 34592
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34591,
            "end": 34592
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34592,
            "end": 34593
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34592,
            "end": 34593
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34652,
            "end": 34657
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34652,
            "end": 34657
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34657,
            "end": 34658
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34657,
            "end": 34658
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34658,
            "end": 34659
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 34658,
            "end": 34659
        },
        {
            "kind": 2,
            "source": 0,
            "code": 1,
            "error": "Unexpected token.",
            "start": 34703,
            "end": 34705
        }
    ],
    "start": 0,
    "end": 34705
}
```

### Printed

```javascript
 test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
const a: number = 1@{xd}@
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
    "source": "const a: number = 1",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": true,@{xd}@
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
                                "start": 5,@{xd}@
                                "end": 7@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 4202657,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 8,@{xd}@
                                "end": 15@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 17,@{xd}@
                                "end": 19@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 5,@{xd}@
                            "end": 19@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 5,@{xd}@
                    "end": 19@{xd}@
                },@{xd}@
                "flags": 16,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 0,@{xd}@
                "end": 19@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 19@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 19@{xd}@
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
const a: number = 1@{xd}@
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
    "source": "const a: number = 1",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": true,@{xd}@
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
                                "start": 5,@{xd}@
                                "end": 7@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 4202657,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 8,@{xd}@
                                "end": 15@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 17,@{xd}@
                                "end": 19@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 5,@{xd}@
                            "end": 19@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 5,@{xd}@
                    "end": 19@{xd}@
                },@{xd}@
                "flags": 16,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 0,@{xd}@
                "end": 19@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 19@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 19@{xd}@
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

