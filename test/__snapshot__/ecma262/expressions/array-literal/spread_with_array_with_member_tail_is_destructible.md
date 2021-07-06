# Kataw parser test case

## Input

`````js
[...[x].map(y, z)[x]] = a;
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
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 130,
                                    "member": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 129,
                                            "member": {
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
                                                            "start": 5,
                                                            "end": 6
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 5,
                                                    "end": 6
                                                },
                                                "flags": 32,
                                                "transformFlags": 8,
                                                "start": 4,
                                                "end": 7
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "map",
                                                "rawText": "map",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 11
                                            },
                                            "flags": 32,
                                            "transformFlags": 2,
                                            "start": 4,
                                            "end": 11
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 12,
                                                    "end": 13
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "z",
                                                    "rawText": "z",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 14,
                                                    "end": 16
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 4,
                                        "end": 17
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 536870944,
                                    "transformFlags": 4,
                                    "start": 4,
                                    "end": 20
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 20
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 21
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 23
                },
                "right": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 23,
                    "end": 25
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "[...[x].map(y, z)[x]] = a;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

[...[x].map(y, z)[x]] = a;
```

### Diagnostics

```javascript
✔ No errors
```

