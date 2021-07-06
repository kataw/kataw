# Kataw parser test case

## Input

`````js
[.../x/g/y]
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 198,
                                "left": {
                                    "kind": 371,
                                    "text": "/x/g",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 4,
                                    "end": 8
                                },
                                "operatorToken": {
                                    "kind": 35640,
                                    "flags": 96,
                                    "transformFlags": 32,
                                    "start": 8,
                                    "end": 9
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 10
                                },
                                "flags": 96,
                                "transformFlags": 1024,
                                "start": 4,
                                "end": 10
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
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
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "[.../x/g/y]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

[.../x/g / y];
```

### Diagnostics

```javascript
✔ No errors
```

