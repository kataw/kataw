# Kataw parser test case

## Input

`````js
const array = [/* comment */];
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 11
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 15
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 13,
                            "end": 29
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 29
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 29
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "const array = [/* comment */];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript
const array = [];
```

### Diagnostics

```javascript
✔ No errors
```

