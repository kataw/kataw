# Kataw parser test case

## Input

`````js
for ([x.y] = z;;);
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 129,
                                "member": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 6,
                                    "end": 7
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 9
                                },
                                "flags": 536870944,
                                "start": 6,
                                "end": 9
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 6,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 134299649,
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "flags": 32,
                "start": 5,
                "end": 14
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 17,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for ([x.y] = z;;);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

for ([x.y] = z; ; );
```

### Diagnostics

```javascript
✔ No errors
```

