# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
var obj = {};

obj.c\u0061se = 42;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "obj",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "autofix": 0,
                                "flags": 0,
                                "start": 11,
                                "end": 11
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 9,
                            "end": 12
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 12
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 129,
                "member": {
                    "kind": 81921,
                    "value": "obj",
                    "autofix": 0,
                    "flags": 768,
                    "start": 13,
                    "end": 18
                },
                "expression": {
                    "kind": 253,
                    "text": "",
                    "autofix": 0,
                    "flags": 12,
                    "start": 19,
                    "end": 19
                },
                "autofix": 0,
                "flags": 256,
                "start": 13,
                "end": 19
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "value": 42,
                "autofix": 0,
                "flags": 768,
                "start": 30,
                "end": 33
            },
            "autofix": 0,
            "flags": 128,
            "start": 30,
            "end": 34
        }
    ],
    "isModule": true,
    "text": "var obj = {};\n\nobj.c\\u0061se = 42;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 68,
            "error": "Dot property must be an identifier",
            "start": 19,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 19,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 19,
            "end": 28
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 28,
            "end": 30
        }
    ],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

