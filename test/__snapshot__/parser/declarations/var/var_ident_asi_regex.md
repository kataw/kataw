# Kataw parser test case

## Input

`````js
var q
/d/
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": " q",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 5
            },
            "flags": 16,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 5,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 65,
                        "start": 5,
                        "end": 7
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 8
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 8,
                    "end": 9
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 9,
                    "end": 9
                },
                "flags": 32,
                "start": 5,
                "end": 9
            },
            "flags": 16,
            "start": 5,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "var q\n/d/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 5, end: 7
✖ Expression expected - start: 9, end: 9

```

