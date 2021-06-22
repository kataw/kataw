# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export class C {
  p = await 0;
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
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 6,
                    "end": 12
                },
                "name": {
                    "kind": 134299649,
                    "text": "C",
                    "rawText": "C",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 303,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "p",
                                    "rawText": "p",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 20
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": {
                                    "kind": 208,
                                    "awaitKeyword": {
                                        "kind": 82196,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 28
                                    },
                                    "expression": {
                                        "kind": 201392130,
                                        "text": 0,
                                        "rawText": "0",
                                        "flags": 96,
                                        "start": 28,
                                        "end": 30
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 30
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 30
                            },
                            {
                                "kind": 317,
                                "flags": 96,
                                "start": 30,
                                "end": 31
                            }
                        ],
                        "flags": 32,
                        "start": 16,
                        "end": 31
                    },
                    "flags": 14,
                    "start": 32,
                    "end": 33
                },
                "flags": 16,
                "start": 6,
                "end": 33
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 80,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "export class C {\n  p = await 0;\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

export class C {
  p = await 0;

}
```

### Diagnostics

```javascript
✔ No errors
```

