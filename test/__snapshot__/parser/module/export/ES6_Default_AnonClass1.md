# Kataw parser test case

## Input

`````js
export default class { givesANum(): number { return 42; }};
`````

## Options

### Parser Options

`````js
{ allowTypes : true, module: true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 14,
                    "end": 20
                },
                "name": null,
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 303,
                        "elements": [
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "asteriskToken": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "givesANum",
                                        "rawText": "givesANum",
                                        "flags": 96,
                                        "start": 22,
                                        "end": 32
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 33,
                                        "end": 34
                                    },
                                    "returnType": {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 2097216,
                                            "start": 35,
                                            "end": 42
                                        },
                                        "flags": 2097152,
                                        "start": 35,
                                        "end": 42
                                    },
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [
                                                {
                                                    "kind": 161,
                                                    "returnKeyword": {
                                                        "kind": 37757022,
                                                        "flags": 80,
                                                        "start": 44,
                                                        "end": 51
                                                    },
                                                    "expression": {
                                                        "kind": 201392130,
                                                        "text": 42,
                                                        "rawText": "42",
                                                        "flags": 96,
                                                        "start": 51,
                                                        "end": 54
                                                    },
                                                    "flags": 80,
                                                    "start": 44,
                                                    "end": 55
                                                }
                                            ],
                                            "flags": 32,
                                            "start": 44,
                                            "end": 55
                                        },
                                        "flags": 32,
                                        "start": 42,
                                        "end": 57
                                    },
                                    "flags": 0,
                                    "start": 32,
                                    "end": 57
                                },
                                "flags": 0,
                                "start": 22,
                                "end": 57
                            }
                        ],
                        "flags": 32,
                        "start": 22,
                        "end": 57
                    },
                    "flags": 20,
                    "start": 32,
                    "end": 58
                },
                "flags": 16,
                "start": 14,
                "end": 58
            },
            "flags": 16,
            "start": 0,
            "end": 58
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 58,
            "end": 59
        }
    ],
    "isModule": true,
    "source": "export default class { givesANum(): number { return 42; }};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

export default class  {
  givesANum {
    return  42;
  }
};

```

### Diagnostics

```javascript
✔ No errors
```

