# Kataw parser test case

## Input

`````js
[x().y = a] = z
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
                                "kind": 125,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1,
                                            "end": 2
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 3
                                        },
                                        "flags": 32,
                                        "transformFlags": 1,
                                        "start": 1,
                                        "end": 4
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 6
                                    },
                                    "flags": 32,
                                    "transformFlags": 2,
                                    "start": 1,
                                    "end": 6
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 10
                                },
                                "flags": 0,
                                "transformFlags": 128,
                                "start": 1,
                                "end": 10
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 10
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 15
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "[x().y = a] = z",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript
[x().y = a] = z;
```

### Diagnostics

```javascript
✔ No errors
```

