# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, allowTypes: true }
`````

## Input

`````js
declare class A { static : number }
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
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 193,
                            "protoKeyword": null,
                            "staticKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "static",
                                "rawText": "static",
                                "flags": 96,
                                "start": 17,
                                "end": 24
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 26,
                                    "end": 33
                                },
                                "flags": 2097152,
                                "start": 26,
                                "end": 33
                            },
                            "flags": 2097152,
                            "start": 17,
                            "end": 33
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 15,
                    "end": 35
                },
                "flags": 4128,
                "start": 15,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "declare class A { static : number }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

declare class A TODO!
```

### Diagnostics

```javascript
✔ No errors
```

