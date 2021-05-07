# Kataw parser test case

## Input

`````js
class x{}
/foo/g
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
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [],
                "flags": 32,
                "start": 8,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
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
                        "start": 9,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 65,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 11,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 14
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 14,
                    "end": 15
                },
                "right": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 15,
                    "end": 16
                },
                "flags": 32,
                "start": 9,
                "end": 16
            },
            "flags": 16,
            "start": 9,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "class x{}\n/foo/g",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expression expected - start: 9, end: 11

```

