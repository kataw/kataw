# Kataw parser test case

## Input

`````js
class x { `constructor`(){} }
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
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 9
                },
                "flags": 7,
                "transformFlags": 0,
                "start": 32,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 458761,
                    "text": "constructor",
                    "rawText": "constructor",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 23
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 24,
                    "end": 24
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 9,
                "end": 25
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 9,
            "end": 25
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 25,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "class x { `constructor`(){} }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 10, end: 23
✖ '{' is not allowed here. Did you mean ';'? - start: 25, end: 26
✖ Declaration or statement expected - start: 27, end: 29

```

