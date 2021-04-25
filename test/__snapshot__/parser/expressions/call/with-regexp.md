# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
 x(/^(<[^>]+>)/)[1];

 x(y, /a/);
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
                "kind": 130,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 0,
                        "end": 2
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 221,
                                "text": "/^(<[^>]+>)/",
                                "flags": 768,
                                "start": 3,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 3,
                        "end": 15
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 16
                },
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 768,
                    "start": 17,
                    "end": 18
                },
                "flags": 256,
                "start": 0,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 20,
                    "end": 24
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 768,
                            "start": 25,
                            "end": 26
                        },
                        {
                            "kind": 221,
                            "text": "/a/",
                            "flags": 768,
                            "start": 27,
                            "end": 31
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 25,
                    "end": 31
                },
                "flags": 256,
                "start": 20,
                "end": 32
            },
            "flags": 128,
            "start": 20,
            "end": 33
        }
    ],
    "isModule": true,
    "text": " x(/^(<[^>]+>)/)[1];\n\n x(y, /a/);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2714}@ No errors
```

