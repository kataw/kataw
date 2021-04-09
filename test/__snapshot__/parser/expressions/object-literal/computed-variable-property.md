# Kataw parser test case

## Input

`````js
var x = {
    [bar]: foo
};

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
                            "value": "x",
                            "autofix": 0,
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "left": {
                                            "kind": 81921,
                                            "value": "foo",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 20,
                                            "end": 24
                                        },
                                        "right": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 81921,
                                                "value": "bar",
                                                "autofix": 0,
                                                "flags": 768,
                                                "start": 15,
                                                "end": 18
                                            },
                                            "autofix": 0,
                                            "flags": 256,
                                            "start": 9,
                                            "end": 19
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 9,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": true,
                                "autofix": 0,
                                "flags": 1,
                                "start": 9,
                                "end": 24
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 7,
                            "end": 26
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 3,
                        "end": 26
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 3,
                "end": 26
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "text": "var x = {\n    [bar]: foo\n};\n",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

