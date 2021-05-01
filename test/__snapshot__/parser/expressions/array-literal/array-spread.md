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

### Hybrid CST

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
                                "start": 1,
                                "end": 2
                            },
                            {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 3,
                                "end": 4
                            },
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 5,
                                    "end": 8
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                        "start": 16,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
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
                                "start": 21,
                                "end": 22
                            },
                            {
                                "kind": 230,
                                "flags": 96,
                                "start": 23,
                                "end": 23
                            },
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 24,
                                    "end": 27
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "rest",
                                    "rawText": "rest",
                                    "flags": 96,
                                    "start": 27,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 24,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 21,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 32
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
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
                        "start": 35,
                        "end": 35
                    },
                    "flags": 32,
                    "start": 33,
                    "end": 36
                },
                "flags": 32,
                "start": 18,
                "end": 36
            },
            "flags": 16,
            "start": 18,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "[a,b,...rest]= {};\n\n[a,,...rest]= {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

