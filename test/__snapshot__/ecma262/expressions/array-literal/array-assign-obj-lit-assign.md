# Kataw parser test case

## Input

`````js
[x, {y = 1}] = [0, {}]
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
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 301,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 6
                                            },
                                            "right": {
                                                "kind": 201392130,
                                                "text": 1,
                                                "rawText": "1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 10
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 3,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 11
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 201392130,
                                "text": 0,
                                "rawText": "0",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 17
                            },
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 20
                                },
                                "flags": 48,
                                "transformFlags": 8,
                                "start": 18,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 21
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 14,
                    "end": 22
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "[x, {y = 1}] = [0, {}]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
[x, { y = 1 }] = [0, {}];
```

### Diagnostics

```javascript
✔ No errors
```

