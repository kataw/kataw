# Kataw parser test case

## Input

`````js
declare class IViewFactory { didAnimate(view:Object, prop:string) :void; }
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
                "flags": 80,
                "start": 0,
                "end": 13
            },
            "name": {
                "kind": 134299649,
                "text": "IViewFactory",
                "rawText": "IViewFactory",
                "flags": 96,
                "start": 13,
                "end": 26
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticToken": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "didAnimate",
                                "rawText": "didAnimate",
                                "flags": 96,
                                "start": 28,
                                "end": 39
                            },
                            "optionalToken": null,
                            "value": {
                                "kind": 148,
                                "parameters": {
                                    "kind": 208,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "view",
                                                "rawText": "view",
                                                "flags": 96,
                                                "start": 40,
                                                "end": 44
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "Object",
                                                    "rawText": "Object",
                                                    "flags": 96,
                                                    "start": 45,
                                                    "end": 51
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 45,
                                                "end": 51
                                            },
                                            "flags": 0,
                                            "start": 40,
                                            "end": 51
                                        },
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "prop",
                                                "rawText": "prop",
                                                "flags": 96,
                                                "start": 52,
                                                "end": 57
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 58,
                                                "end": 64
                                            },
                                            "flags": 0,
                                            "start": 52,
                                            "end": 64
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 40,
                                    "end": 64
                                },
                                "returnType": {
                                    "kind": 138477615,
                                    "flags": 64,
                                    "start": 67,
                                    "end": 71
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 39,
                                "end": 71
                            },
                            "flags": 0,
                            "start": 28,
                            "end": 72
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 26,
                    "end": 74
                },
                "flags": 4128,
                "start": 26,
                "end": 74
            },
            "flags": 16,
            "start": 0,
            "end": 74
        }
    ],
    "isModule": false,
    "source": "declare class IViewFactory { didAnimate(view:Object, prop:string) :void; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 74
}
```

### Printed

```javascript

declare class IViewFactory TODO!
```

### Diagnostics

```javascript
✔ No errors
```

