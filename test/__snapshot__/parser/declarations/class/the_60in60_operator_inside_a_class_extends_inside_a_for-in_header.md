# Kataw parser test case

## Input

`````js
for (class x extends a in b {} in c);
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 189,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 64,
                    "start": 5,
                    "end": 10
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": {
                        "kind": 279,
                        "extendsKeyword": {
                            "kind": 4194391,
                            "flags": 80,
                            "start": 12,
                            "end": 20
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 20,
                            "end": 22
                        },
                        "typeParameter": null,
                        "flags": 16,
                        "start": 20,
                        "end": 22
                    },
                    "body": {
                        "kind": 262,
                        "elements": [],
                        "flags": 32,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 12,
                    "start": 32,
                    "end": 12
                },
                "flags": 32,
                "start": 5,
                "end": 22
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 22,
                "end": 25
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 25,
                "end": 27
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "start": 29,
                    "end": 29
                },
                "flags": 16,
                "start": 27,
                "end": 30
            },
            "flags": 80,
            "start": 0,
            "end": 30
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 30,
                    "end": 30
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 64,
                    "start": 30,
                    "end": 33
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 33,
                    "end": 35
                },
                "flags": 32,
                "start": 30,
                "end": 35
            },
            "flags": 16,
            "start": 30,
            "end": 35
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 36,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "for (class x extends a in b {} in c);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening brace - '{ - start: 23, end: 25
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 25, end: 27
✖ Expected a ')' to match the '(' token here - start: 28, end: 29
✖ Identifier expected - start: 30, end: 33
✖ Expected a `;` - start: 35, end: 36

```

