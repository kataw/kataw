# Kataw parser test case

## Input

`````js
class ClassWithParentAndInterface extends MyOtherClass implements MyInterface {}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "class ClassWithParentAndInterface extends MyOtherClass implements MyInterface {}",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "ClassWithParentAndInterface",
                "rawText": "ClassWithParentAndInterface",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 5,
                "end": 33
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "MyOtherClass",
                    "rawText": "MyOtherClass",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 41,
                    "end": 54
                },
                "typeArguments": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 41,
                "end": 54
            },
            "implementClauses": {
                "kind": 107,
                "clauses": [
                    {
                        "kind": 106,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "MyInterface",
                                "rawText": "MyInterface",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 65,
                                "end": 77
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 65,
                            "end": 79
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "start": 65,
                        "end": 77
                    }
                ],
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 65,
                "end": 77
            },
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 79,
                "end": 80
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 0,
            "intersects": false,
            "transformFlags": 1,
            "start": 0,
            "end": 80
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 80
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

