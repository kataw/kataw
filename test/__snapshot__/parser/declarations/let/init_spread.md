# Kataw parser test case

## Input

`````js
let x = ...y;
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 16637,
                            "text": "",
                            "flags": 12,
                            "start": 7,
                            "end": 7
                        },
                        "flags": 128,
                        "start": 3,
                        "end": 7
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 768,
                "start": 11,
                "end": 12
            },
            "flags": 128,
            "start": 11,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "let x = ...y;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 7, end: 11
✖ ',' expected - start: 7, end: 11
✖ Statement expected - start: 7, end: 11

```

