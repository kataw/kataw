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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 189,
                "decorators": null,
                "classKeyword": {
                    "kind": 37814352,
                    "flags": 768,
                    "start": 5,
                    "end": 10
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 768,
                    "start": 10,
                    "end": 12
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 279,
                    "extendsToken": {
                        "kind": 4194391,
                        "flags": 768,
                        "start": 12,
                        "end": 20
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 20,
                        "end": 22
                    },
                    "typeParameter": null,
                    "flags": 128,
                    "start": 20,
                    "end": 22
                },
                "members": {
                    "kind": 277,
                    "elements": [],
                    "flags": 256,
                    "start": 5,
                    "end": 5
                },
                "flags": 256,
                "start": 5,
                "end": 22
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 768,
                "start": 25,
                "end": 27
            },
            "statement": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 128,
                    "start": 29,
                    "end": 29
                },
                "flags": 128,
                "start": 27,
                "end": 30
            },
            "flags": 128,
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
                    "autofix": 0,
                    "flags": 12,
                    "start": 30,
                    "end": 30
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 768,
                    "start": 30,
                    "end": 33
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 768,
                    "start": 33,
                    "end": 35
                },
                "flags": 256,
                "start": 30,
                "end": 35
            },
            "flags": 128,
            "start": 30,
            "end": 35
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 36,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "for (class x extends a in b {} in c);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 22,
            "end": 25
        },
        {
            "kind": 2,
            "source": 2,
            "code": 62,
            "error": "Invalid left-hand side in for-in loop",
            "start": 25,
            "end": 27
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 27,
            "end": 29
        },
        {
            "kind": 2,
            "source": 2,
            "code": 3,
            "error": "Identifier expected",
            "start": 30,
            "end": 33
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 35,
            "end": 36
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 35,
            "end": 36
        }
    ],
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

