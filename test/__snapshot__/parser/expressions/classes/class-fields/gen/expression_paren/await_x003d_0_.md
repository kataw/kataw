# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-29
- From: kataw7/test\__snapshot__/parser/expressions/classes/class-fields/autogen.md
- Path: kataw7/test\__snapshot__\parser\expressions\classes\class-fields\gen\expression_paren
> :: test: expression_paren
> :: case: await = 0;
## Input

`````js
(class { await = 0; });
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 262,
                            "elements": [
                                {
                                    "kind": 280,
                                    "decorators": null,
                                    "declaredToken": null,
                                    "staticToken": null,
                                    "asyncKeyword": null,
                                    "key": {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 8,
                                        "end": 14
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 8,
                                    "end": 18
                                },
                                {
                                    "kind": 281,
                                    "flags": 96,
                                    "start": 18,
                                    "end": 19
                                }
                            ],
                            "flags": 32,
                            "start": 8,
                            "end": 19
                        },
                        "flags": 6,
                        "start": 32,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "(class { await = 0; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

(class  {
    await = 0;

  });
```

### Diagnostics

```javascript
✔ No errors
```

