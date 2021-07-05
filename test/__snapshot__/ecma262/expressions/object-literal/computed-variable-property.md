# Kataw parser test case

## Input

`````js
var x = {
    [bar]: foo
};

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 194,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 15,
                                                "end": 18
                                            },
                                            "flags": 32,
                                            "start": 9,
                                            "end": 19
                                        },
                                        "right": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 20,
                                            "end": 24
                                        },
                                        "flags": 33,
                                        "start": 9,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "start": 9,
                                "end": 24
                            },
                            "flags": 49,
                            "start": 7,
                            "end": 26
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 26
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "var x = {\n    [bar]: foo\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

var x = {
    [bar]: foo
  };
```

### Diagnostics

```javascript
✔ No errors
```

