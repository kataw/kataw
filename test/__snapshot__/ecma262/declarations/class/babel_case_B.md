# Kataw parser test case

## Input

`````js
x = class{} / x
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
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 9
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 10
                        },
                        "flags": 9,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 11
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 11
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 371,
                "text": "/ x",
                "rawText": "/ x",
                "flags": 96,
                "transformFlags": 0,
                "start": 11,
                "end": 15
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 11,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "x = class{} / x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unterminated regular expression - start: 11, end: 15
✖ '; ' is not allowed here. Did you mean ';'? - start: 11, end: 15

```

