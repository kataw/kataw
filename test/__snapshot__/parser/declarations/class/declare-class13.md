# Kataw parser test case

## Input

`````js
declare class A { static () : number }
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
                            "kind": 196,
                            "protoKeyword": null,
                            "typeParameter": null,
                            "value": {
                                "kind": 208,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 26,
                                "end": 26
                            },
                            "staticToken": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 17,
                                "end": 24
                            },
                            "returnType": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 29,
                                "end": 36
                            },
                            "flags": 0,
                            "start": 17,
                            "end": 36
                        }
                    ],
                    "flags": 0,
                    "start": 15,
                    "end": 38
                },
                "flags": 4128,
                "start": 15,
                "end": 38
            },
            "flags": 16,
            "start": 0,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "declare class A { static () : number }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
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

