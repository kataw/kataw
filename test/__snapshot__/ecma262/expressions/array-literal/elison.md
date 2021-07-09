# Kataw parser test case

## Input

`````js
let [a,] = 0;
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
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 6
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 7
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 8
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 12
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 12
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 12
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "let [a,] = 0;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
let [a,] = 0;
```

### Diagnostics

```javascript
✔ No errors
```

