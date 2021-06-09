# Kataw parser test case

## Input

`````js
f = ([xCls = class X {}]) => {}
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
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 25,
                        "end": 28
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 201,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "xCls",
                                            "rawText": "xCls",
                                            "flags": 96,
                                            "start": 6,
                                            "end": 10
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 189,
                                            "decorators": null,
                                            "classKeyword": {
                                                "kind": 37822544,
                                                "flags": 64,
                                                "start": 12,
                                                "end": 18
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "X",
                                                "rawText": "X",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "typeParameters": null,
                                            "tail": {
                                                "kind": 277,
                                                "classHeritage": null,
                                                "body": {
                                                    "kind": 262,
                                                    "elements": [],
                                                    "flags": 32,
                                                    "start": 22,
                                                    "end": 22
                                                },
                                                "flags": 20,
                                                "start": 32,
                                                "end": 23
                                            },
                                            "flags": 32,
                                            "start": 12,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 23
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 6,
                                "end": 23
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 24
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 30,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 28,
                        "end": 31
                    },
                    "flags": 34,
                    "start": 3,
                    "end": 31
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "f = ([xCls = class X {}]) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

f = ([]) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

