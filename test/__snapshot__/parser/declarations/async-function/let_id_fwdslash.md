# Kataw parser test case

## Input

`````js
let p/
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 640,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "p",
                            "rawText": "p",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 5
            },
            "flags": 128,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 5,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 5,
                    "start": 512,
                    "end": 6
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 6,
                    "end": 6
                },
                "flags": 256,
                "start": 5,
                "end": 6
            },
            "flags": 128,
            "start": 5,
            "end": 6
        }
    ],
    "isModule": false,
    "text": "let p/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 5, end: 6
✖ Expression expected - start: 5, end: 6
✖ Expression expected - start: 6, end: 6

```

