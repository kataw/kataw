# Kataw parser test case

## Input

`````js
[...{true=x} = c]
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
                                "kind": 125,
                                "left": {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "true",
                                                "rawText": "true",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 5,
                                                "end": 9
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "flags": 48,
                                    "transformFlags": 8,
                                    "start": 4,
                                    "end": 9
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 9,
                                    "end": 10
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 11
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 4,
                                "end": 11
                            },
                            "flags": 1073741856,
                            "transformFlags": 0,
                            "start": 1,
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
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 14,
                "end": 16
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 14,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "[...{true=x} = c]",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Property definition expected. Did you mean to use a ':'? - start: 9, end: 10
✖ ',' expected - start: 9, end: 10
✖ ',' expected - start: 11, end: 12
✖ Declaration or statement expected - start: 12, end: 14
✖ '; ' expected - start: 16, end: 17

```

