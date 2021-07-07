# Kataw parser test case

## Input

`````js
var a = {
  br\u{65}ak
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
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
                                        "kind": 134299649,
                                        "text": "break",
                                        "rawText": "br\\u{65}ak",
                                        "flags": 8289,
                                        "transformFlags": 0,
                                        "start": 9,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 8209,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 22
                            },
                            "flags": 8241,
                            "transformFlags": 8,
                            "start": 7,
                            "end": 24
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 24
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "var a = {\n  br\\u{65}ak\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 22, end: 24

```

