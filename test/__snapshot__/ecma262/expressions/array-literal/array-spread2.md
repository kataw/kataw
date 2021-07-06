# Kataw parser test case

## Input

`````js
[a,b,...rest]= {};

[a,,...rest]= {};
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 4
                            },
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 5,
                                    "end": 8
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 12
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 0,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 14
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 14,
                    "end": 17
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 18
        },
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
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 22
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 23
                            },
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 27
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 31
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 24,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 21,
                        "end": 31
                    },
                    "flags": 33,
                    "transformFlags": 8,
                    "start": 18,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 33
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 35
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 33,
                    "end": 36
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 18,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 18,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "[a,b,...rest]= {};\n\n[a,,...rest]= {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

[a, b, ...rest] = {};
[a, , ...rest] = {};

```

### Diagnostics

```javascript
✔ No errors
```

