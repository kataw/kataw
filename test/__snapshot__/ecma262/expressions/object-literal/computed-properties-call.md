# Kataw parser test case

## Input

`````js
var foo = {
  [bar()]: ""
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
                "transformFlags": 0,
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
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
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 15,
                                                    "end": 18
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 19,
                                                    "end": 19
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 15,
                                                "end": 20
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 11,
                                            "end": 21
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "",
                                            "rawText": "\"\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 25
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 11,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 25
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 9,
                            "end": 27
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 27
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "var foo = {\n  [bar()]: \"\"\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

var foo = { [bar()]: "\"\"" };
```

### Diagnostics

```javascript
✔ No errors
```

