# Kataw parser test case

## Input

`````js
type Fn0 = () => number;
`````

## Options

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
                "end": 8
            },
            "name": {
                "kind": 134299649,
                "text": "Fn0",
                "rawText": "Fn0",
                "flags": 96,
                "start": 4,
                "end": 8
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 13,
                    "end": 16
                },
                "parameters": {
                    "kind": 208,
                    "functionTypeParameterList": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 12,
                    "end": 12
                },
                "returnType": {
                    "kind": 134234345,
                    "flags": 64,
                    "start": 16,
                    "end": 23
                },
                "typeParameters": null,
                "flags": 0,
                "start": 12,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "type Fn0 = () => number;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

