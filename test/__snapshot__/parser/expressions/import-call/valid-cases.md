# Kataw parser test case

## Input

`````js

import(x);

import(foo);

import(1);

import(y=x);

import(import(x));

import(x).then();

`````

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
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 1,
                    "start": 0,
                    "end": 7
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 8,
                    "end": 9
                },
                "flags": 32,
                "start": 7,
                "end": 10
            },
            "flags": 16,
            "start": 7,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 1,
                    "start": 11,
                    "end": 19
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 20,
                    "end": 23
                },
                "flags": 32,
                "start": 19,
                "end": 24
            },
            "flags": 16,
            "start": 19,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 1,
                    "start": 25,
                    "end": 33
                },
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "start": 34,
                    "end": 35
                },
                "flags": 32,
                "start": 33,
                "end": 36
            },
            "flags": 16,
            "start": 33,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 1,
                    "start": 37,
                    "end": 45
                },
                "expression": {
                    "kind": 125,
                    "left": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 46,
                        "end": 47
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 47,
                        "end": 48
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 48,
                        "end": 49
                    },
                    "flags": 32,
                    "start": 46,
                    "end": 49
                },
                "flags": 32,
                "start": 45,
                "end": 50
            },
            "flags": 16,
            "start": 45,
            "end": 51
        },
        {
            "kind": 120,
            "expression": {
                "kind": 206,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 1,
                    "start": 51,
                    "end": 59
                },
                "expression": {
                    "kind": 120,
                    "expression": {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 0,
                            "start": 60,
                            "end": 66
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 67,
                            "end": 68
                        },
                        "flags": 32,
                        "start": 66,
                        "end": 69
                    },
                    "flags": 16,
                    "start": 66,
                    "end": 69
                },
                "flags": 32,
                "start": 59,
                "end": 70
            },
            "flags": 16,
            "start": 59,
            "end": 71
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 206,
                        "importKeyword": {
                            "kind": 37814364,
                            "flags": 1,
                            "start": 71,
                            "end": 79
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 80,
                            "end": 81
                        },
                        "flags": 32,
                        "start": 79,
                        "end": 82
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "then",
                        "rawText": "then",
                        "flags": 96,
                        "start": 83,
                        "end": 87
                    },
                    "flags": 32,
                    "start": 79,
                    "end": 87
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 88,
                    "end": 88
                },
                "flags": 32,
                "start": 79,
                "end": 89
            },
            "flags": 16,
            "start": 79,
            "end": 90
        }
    ],
    "isModule": false,
    "text": "\nimport(x);\n\nimport(foo);\n\nimport(1);\n\nimport(y=x);\n\nimport(import(x));\n\nimport(x).then();\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 91
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

