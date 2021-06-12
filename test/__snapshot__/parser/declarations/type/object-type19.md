# Kataw parser test case

## Input

`````js
type a = {get foo():string};
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 134234353,
                "properties": [
                    {
                        "kind": 193,
                        "protoKeyword": null,
                        "staticToken": null,
                        "getKeyword": {
                            "kind": 16498,
                            "flags": 96,
                            "start": 10,
                            "end": 17
                        },
                        "setKeyword": null,
                        "key": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 13,
                            "end": 17
                        },
                        "optionalToken": null,
                        "value": {
                            "kind": 148,
                            "parameters": {
                                "kind": 208,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 18,
                                "end": 18
                            },
                            "returnType": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 20,
                                "end": 26
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 17,
                            "end": 26
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 26
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "type a = {get foo():string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

