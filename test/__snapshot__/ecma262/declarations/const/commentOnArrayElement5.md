# Kataw parser test case

## Input

`````js
const array = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];
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
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 42
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 13,
                            "end": 95
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 95
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 95
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 96
        }
    ],
    "isModule": false,
    "source": "const array = [\n    /* element 1 */\n    1,\n    /* end of element 1 */\n    /* extra comment */\n];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 96
}
```

### Printed

```javascript
const array = [1,];
```

### Diagnostics

```javascript
✔ No errors
```

