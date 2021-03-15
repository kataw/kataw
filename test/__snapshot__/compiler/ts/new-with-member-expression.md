# Kataw parser test case

## Input

`````js
new foo.bar();
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "new foo.bar();",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 66204,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 7
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 11
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 11,
                    "period": {
                        "kind": 255,
                        "pos": 7,
                        "end": 8
                    }
                },
                "typeArguments": null,
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "symbol": null,
                    "start": 12,
                    "end": 12
                },
                "flags": 0,
                "symbol": null,
                "transformFlags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

