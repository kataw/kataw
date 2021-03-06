# Kataw parser test case

## Input

`````js
const [,,] = x;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
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
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 7,
                                        "end": 7
                                    },
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 8
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 14
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 14
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "const [,,] = x;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
const [, ,] = x;
```

### Diagnostics

```javascript
✔ No errors
```

