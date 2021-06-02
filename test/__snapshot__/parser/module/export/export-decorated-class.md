# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export @bar class Foo { }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": {
                    "kind": 207,
                    "elements": [
                        {
                            "kind": 34611453,
                            "decoratorToken": {
                                "kind": 34611453,
                                "flags": 64,
                                "start": 6,
                                "end": 8
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "bar",
                                "rawText": "bar",
                                "flags": 96,
                                "start": 8,
                                "end": 11
                            },
                            "flags": 0,
                            "start": 8,
                            "end": 11
                        }
                    ],
                    "flags": 32,
                    "start": 6,
                    "end": 11
                },
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 6,
                    "end": 17
                },
                "name": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "start": 17,
                    "end": 21
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 262,
                        "elements": [],
                        "flags": 32,
                        "start": 23,
                        "end": 23
                    },
                    "flags": 21,
                    "start": 32,
                    "end": 25
                },
                "flags": 16,
                "start": 6,
                "end": 25
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": true,
    "source": "export @bar class Foo { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

export @bar
class Foo {}
```

### Diagnostics

```javascript
✔ No errors
```

