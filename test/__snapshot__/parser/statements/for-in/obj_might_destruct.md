# Kataw parser test case

## Input

`````js
for ({x,...x}=x in x) ;
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 6,
                                "end": 7
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 8,
                                    "start": 0,
                                    "end": 11
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 768,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 256,
                                "start": 8,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 6,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 13,
                    "start": 512,
                    "end": 14
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 14,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 15,
                        "start": 512,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 768,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 256,
                    "start": 14,
                    "end": 20
                },
                "flags": 256,
                "start": 5,
                "end": 20
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 12,
                "start": 20,
                "end": 20
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 21,
                "end": 23
            },
            "flags": 128,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "for ({x,...x}=x in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 20, end: 21

```

