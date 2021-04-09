# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
_ => _
/foo/
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "typeParameters": null,
                "parameters": {
                    "kind": 81921,
                    "value": "_",
                    "autofix": 0,
                    "flags": 768,
                    "start": 0,
                    "end": 1
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 81921,
                            "value": "_",
                            "autofix": 0,
                            "flags": 768,
                            "start": 4,
                            "end": 6
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "autofix": 0,
                            "flags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "right": {
                            "kind": 81921,
                            "value": "foo",
                            "autofix": 0,
                            "flags": 768,
                            "start": 8,
                            "end": 11
                        },
                        "autofix": 0,
                        "flags": 256,
                        "start": 4,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "autofix": 0,
                        "flags": 0,
                        "start": 11,
                        "end": 12
                    },
                    "right": {
                        "kind": 253,
                        "text": "",
                        "autofix": 0,
                        "flags": 12,
                        "start": 12,
                        "end": 12
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 4,
                    "end": 12
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": true,
    "text": "_ => _\n/foo/",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 12,
            "end": 12
        }
    ],
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

