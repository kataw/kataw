# Kataw parser test case

## Input

`````js
var foo = /* comment */ (
    42
);
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
                            "kind": 121,
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 97,
                                "transformFlags": 0,
                                "start": 25,
                                "end": 32
                            },
                            "flags": 9,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 34
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 34
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 34
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "var foo = /* comment */ (\n    42\n);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
var foo = (42);
```

### Diagnostics

```javascript
✔ No errors
```

