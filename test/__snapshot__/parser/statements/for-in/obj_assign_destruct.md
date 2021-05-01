# Kataw parser test case

## Input

`````js
for ({x:a.b}=x in x) ;
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
                                "kind": 219,
                                "generatorToken": null,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 129,
                                    "member": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 11
                                    },
                                    "flags": 32,
                                    "start": 6,
                                    "end": 11
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 7
                                },
                                "flags": 32,
                                "start": 6,
                                "end": 11
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 6,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 12,
                    "end": 13
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 13,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 64,
                        "start": 14,
                        "end": 17
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 17,
                        "end": 19
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 19
                },
                "flags": 32,
                "start": 5,
                "end": 19
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 19,
                "end": 19
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 20,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for ({x:a.b}=x in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 19, end: 20

```

