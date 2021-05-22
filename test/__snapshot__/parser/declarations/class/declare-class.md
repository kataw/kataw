# Kataw parser test case

## Input

`````js
declare class A { static foo(): number; static x : string }
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "start": 0,
                "end": 7
            },
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 7,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 278,
                            "declareToken": null,
                            "decorators": null,
                            "generatorToken": null,
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 17,
                                "end": 24
                            },
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 29,
                                    "end": 30
                                },
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 64,
                                        "start": 31,
                                        "end": 38
                                    },
                                    "flags": 0,
                                    "start": 30,
                                    "end": 38
                                },
                                "contents": {
                                    "kind": 264,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 64,
                                            "start": 38,
                                            "end": 38
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 38,
                                        "end": 38
                                    },
                                    "flags": 0,
                                    "start": 38,
                                    "end": 38
                                },
                                "flags": 0,
                                "start": 28,
                                "end": 38
                            },
                            "flags": 0,
                            "start": 24,
                            "end": 38
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 38,
                            "end": 39
                        },
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 39,
                                "end": 46
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 46,
                                "end": 48
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 64,
                                    "start": 50,
                                    "end": 57
                                },
                                "flags": 0,
                                "start": 48,
                                "end": 57
                            },
                            "initializer": null,
                            "flags": 32,
                            "start": 46,
                            "end": 57
                        }
                    ],
                    "flags": 32,
                    "start": 17,
                    "end": 57
                },
                "flags": 32,
                "start": 15,
                "end": 59
            },
            "flags": 16,
            "start": 7,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "declare class A { static foo(): number; static x : string }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 59
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An implementation cannot be declared in ambient contexts - start: 38, end: 39

```

