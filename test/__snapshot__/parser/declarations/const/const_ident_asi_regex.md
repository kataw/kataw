# Kataw parser test case

## Input

`````js
const q
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 768,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 5,
                        "end": 7
                    }
                ],
                "flags": 160,
                "start": 5,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
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
                        "flags": 12,
                        "start": 7,
                        "end": 7
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 768,
                        "start": 7,
                        "end": 9
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 768,
                        "start": 9,
                        "end": 10
                    },
                    "flags": 256,
                    "start": 7,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 768,
                    "start": 10,
                    "end": 11
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 12,
                    "start": 11,
                    "end": 11
                },
                "flags": 256,
                "start": 7,
                "end": 11
            },
            "flags": 128,
            "start": 7,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "const q\n/d/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Missing initializer in const declaration - start: 7, end: 9
@{x2716}@ Expression expected - start: 7, end: 9
@{x2716}@ Expression expected - start: 11, end: 11

```

