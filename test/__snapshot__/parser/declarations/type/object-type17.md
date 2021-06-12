# Kataw parser test case

## Input

`````js
type a = {():string};
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
                        "kind": 196,
                        "protoKeyword": null,
                        "typeParameter": null,
                        "value": {
                            "kind": 208,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 11,
                            "end": 11
                        },
                        "staticToken": null,
                        "returnType": {
                            "kind": 134234347,
                            "flags": 64,
                            "start": 13,
                            "end": 19
                        },
                        "flags": 0,
                        "start": 10,
                        "end": 19
                    }
                ],
                "flags": 0,
                "start": 8,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "type a = {():string};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

