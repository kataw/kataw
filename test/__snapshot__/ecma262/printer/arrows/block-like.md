# Kataw parser test case

## Input

`````js
a = () => ({} = this);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 5
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 9
                    },
                    "contents": {
                        "kind": 121,
                        "expression": {
                            "kind": 125,
                            "left": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 12
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 11,
                                "end": 13
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "right": {
                                "kind": 4276321,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 20
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 11,
                            "end": 20
                        },
                        "flags": 9,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 21
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 21
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "a = () => ({} = this);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
a = () => ({} = this);
```

### Diagnostics

```javascript
✔ No errors
```

